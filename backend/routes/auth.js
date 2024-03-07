const express = require('express')
const router = express.Router()
const { body, validationResult } = require("express-validator")
const User = require('../models/User')
const fetchUser = require("../middleware/fetchUser")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

const JWT_SECRET = 'utsav-application@2905'

// Create user route
router.post("/createUser", [
    body("name", "Write your name").isLength({ min: 3 }, { max: 20 }),
    body("email", "email address should be unique").isEmail(),
    body("password", "password must be atleast 8 characters").isLength({ min: 8 }),
    body("mobile number", "mobile number must be of 10 character").isLength({ min: 10 }, { max: 10 }),
    body("address", "write your unique address in it")
], async (req, res) => {
    const error = validationResult(req)
    try {
        // first check whether use exists or not with the provided email
        let user = await User.findOne({ email: req.body.email })
        if (user) {
            return res.status(404).json({ error: "user already exists with this email" })
        }

        const salt = await bcrypt.genSalt(10)
        const secPass = await bcrypt.hash(req.body.password, salt)
        // create User
        user = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: secPass,
            mobileNumber: req.body.mobileNumber,
            address: req.body.address
        })

        const data = {
            user: {
                id: user.id,
                name: user.name,
            }
        }
        // create authentication token
        const authToken = jwt.sign(data, JWT_SECRET)
        res.json({ authToken })
        console.log("Account created successfully");

    } catch (error) {
        console.error(error.message);
    }
})

// route 2: login using authentication 
router.post("/login", fetchUser, [
    body("email", "Enter the email address you want to login with").isEmail(),
    body("password", "Enter the password").exists()
], async (req, res) => {
    const error = validationResult(req)
    if (!error.isEmpty) {
        return res.status(401).json({ error: error.array() })
    }

    const { email, password } = req.body
    try {
        const user = await User.findOne({ email })
        if (!user) {
            return res.status(404).json('User does not exist with this email address')
        }
        const passwordCompare = await bcrypt.compare(password, user.password)
        if (!passwordCompare) {
            return res.status(401).json("Use correct credentials")
        }

        const data = {
            user: {
                id: user.id,
                name: user.name,
            }
        }

        const authToken = jwt.sign(data, JWT_SECRET)
        res.json({ authToken, message: "User logged in successfully" })
        console.log("User logged in succssfully");
    } catch (error) {
        console.error(error.message);
        res.status(500).json("Internal server error")
    }
})

// route 3: get user data
router.get("/getUserData", fetchUser, async (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(401).json({ errors: errors.array() })
    }
    try {
        const userId = await req.user.id
        const user = await User.findById(userId).select("+password")
        res.send({ user })
        console.log("Fetched user details");
    } catch (error) {
        console.error(error.message);
        res.send(500).json("Internal server error")
    }
})

// route 4: get all users data
router.get("/getAllUsersData", fetchUser, async (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(401).json({ errors: errors.array() })
    }

    try {
        const allUsers = await User.find()
        res.json({ allUsers })
    } catch (error) {
        console.error(error.message);
        res.json("Internal server error")
    }
})

// route 5: to delete user
router.delete("/deleteUser/:id", fetchUser, async (req, res) => {
    const userId = req.user.id
    const user = await User.findById(userId)
    try {
        if (!user) {
            return res.status(404).json("User not found")
        }
        await User.findByIdAndDelete(userId)
        res.json("Account deleted successfully")
    } catch (error) {
        console.error(error.message);
        res.status(501).json("Internal server error")
    }
})
module.exports = router