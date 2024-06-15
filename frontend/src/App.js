import { Toaster } from "react-hot-toast";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useParams,
  Navigate,
} from "react-router-dom";
import { AuthProvider } from "./Context/Authentication_context/AuthContext";
import { LocationProvider } from "./Context/Location_context/LocationContext";
import { ActivityProvider } from "./Context/Activity_context/ActivityContext";
import Home from "./pages/Home";
import Navbar from "./Components/Navbar";
import Vendors from "./pages/Vendors";
import About from "./pages/About";
import LogIn from "./Authentication/Login";
import SignUp from "./Authentication/SignUp";
import Footer from "./Components/Footer";
import UserProfile from "./pages/UserProfile";
import UserDetails from "./Components/UserDetails";
import Settings from "./Components/Settings";
import Activity from "./Components/Activity";
import DisplayVendorsData from "./pages/DisplayVendorsData";
import VendorDetailsPage from "./pages/VendorDetailsPage";
import Photos from "./pages/Photos";


function App() {
  const { location, category, subCategory } = useParams();
  const token = localStorage.getItem("token");

  //eslint-disable-next-line
  const RequireAuth = ({ children }) => {
    return token ? children : <Navigate to="/login" />;
  };

  return (
    <>
      <Router>
        <LocationProvider>
          <AuthProvider>
            <ActivityProvider>
              <Toaster
                position="top-center"
                toastOptions={{ duration: 1000 }}
                reverseOrder={false}
              ></Toaster>
              <Navbar />
              <Routes>
                <Route exact index element={<Home />} />
                <Route exact path="/" element={<Home />} />
                <Route exact path="/vendors" element={<Vendors />} />
                <Route
                  exact
                  path="/vendors/:location/:category?/:all?/:subCategory?"
                  element={<DisplayVendorsData />}
                />
                <Route
                  exact
                  path="/vendors/:location/:category?/:all?/:subCategory?/:name?"
                  element={<VendorDetailsPage />}
                />
                <Route exactt path="/photos" element={<Photos />} />
                <Route exact path="/about" element={<About />} />
                <Route exact path="/logIn" element={<LogIn />} />
                <Route exact path="/signUp" element={<SignUp />} />
                <Route
                  exact
                  path="/userProfile/"
                  element={
                    // <RequireAuth>
                    <UserProfile />
                    /* </RequireAuth> */
                  }
                >
                  <Route
                    exact
                    path="/userProfile/profile"
                    element={<UserDetails />}
                  />
                  <Route
                    exact
                    path="/userProfile/settings"
                    element={<Settings />}
                  />
                  <Route
                    exact
                    path="/userProfile/activity"
                    category={category}
                    subCategory={subCategory}
                    location={location}
                    element={<Activity />}
                  />
                </Route>
              </Routes>
              <Footer />
            </ActivityProvider>
          </AuthProvider>
        </LocationProvider>
      </Router>
    </>
  );
}

export default App;
