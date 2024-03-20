import { createContext, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [passwordType, setPasswordType] = useState("password");
  const [userData, setUserData] = useState([]);
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const [createUserCredentials, setCreateUserCredentials] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    mobileNumber: "",
    address: "",
  });
  const token = localStorage.getItem("token");
  const host = "http://localhost:8000/api/auth";
  const navigate = useNavigate();

  const handlePasswordType = () => {
    if (passwordType === "text") {
      setPasswordType("password");
    } else {
      setPasswordType("text");
    }
  };

  // create user account handle
  const createUser = async () => {
    const {
      firstName,
      lastName,
      email,
      password,
      mobileNumber,
      address,
      confirmPassword,
    } = createUserCredentials;
    if (password === confirmPassword) {
      try {
        const response = await fetch(`${host}/createUser`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: firstName + lastName,
            email,
            password,
            mobileNumber,
            address,
          }),
        });
        if (!response.ok) {
          throw new Error("failed to create user");
        }
        const data = await response.json();
        console.log(data);
        navigate("/home");
        localStorage.setItem("token", data.authToken);
        toast.success("Account Created Successfully!");
      } catch (error) {
        console.error(error.message);
      }
    } else {
      toast.error("Both password must be same.");
    }
  };

  // login handle
  const login = async () => {
    try {
      const response = await fetch(`${host}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "auth-token": token,
        },
        body: JSON.stringify({
          email: credentials.email,
          password: credentials.password,
        }),
      });
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        localStorage.setItem("token", data.authToken);
        navigate("/home");
        toast.success("User logged in successfully!");
        setCredentials({ email: "", password: "" });
      } else {
        toast.error("use correct credentials");
        throw new Error("Failed to login");
      }
    } catch (error) {
      toast.error("Internal server error");
      console.error(error.message);
    }
  };

  // get user data handle
  const getUserData = async () => {
    const response = await fetch(`${host}/getUserData`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token": token,
      },
    });
    if (!response.ok) {
      throw new Error("failed to fetch user data");
    }
    const data = await response.json();
    console.log(data);
    if (Array.isArray(data.user)) {
      setUserData(data.user);
    } else {
      setUserData([data.user]); // Convert single object to array
    }
    toast.success("user data fetched");
  };

  return (
    <>
      <AuthContext.Provider
        value={{
          login,
          createUser,
          getUserData,
          userData,
          createUserCredentials,
          setCreateUserCredentials,
          credentials,
          setCredentials,
          passwordType,
          handlePasswordType,
        }}
      >
        {children}
      </AuthContext.Provider>
    </>
  );
};
