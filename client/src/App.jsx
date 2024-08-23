import "./App.css";
import { Routes, Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { useAuthContext } from "./hooks/useAuthContext.js";
import { ChakraProvider } from "@chakra-ui/react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Home from "./components/pages/Home";
import About from "./components/pages/About.jsx";
import Login from "./components/pages/Login.jsx";
import Signup from "./components/pages/Signup.jsx";
import AdminDashboard from "./components/pages/AdminDashboard.jsx";
import Unauthorized from "./components/pages/Unauthorized.jsx";
import NotFound from "./components/pages/NotFound.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";
import  Impact  from "./components/pages/impact.jsx";

function App() {
  const { user } = useAuthContext();
  console.log("App user:", user);

  return (
    <Router>
      <ChakraProvider>
        <div className="App">
          <ToastContainer
            position="top-right"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />
          <ToastContainer />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/programs" element={<Signup />} />
            <Route path="/impact" element={<Impact />} />

            <Route
              path="/admin"
              element={
                <ProtectedRoute allowedRoles={["admin"]}>
                  <AdminDashboard></AdminDashboard>
                </ProtectedRoute>
              }
            />

            <Route path="/unauthorized" element={<Unauthorized />} />
            <Route path="/*" element={<NotFound />} />
          </Routes>
        </div>
      </ChakraProvider>
    </Router>
  );
}

export default App;
