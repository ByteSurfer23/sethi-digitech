import Main_Portfolio from "./pages/Portfolio.jsx";
import React from "react";
import { BrowserRouter as Router, Routes, Route , Navigate} from "react-router-dom";
import Admin from "./pages/Admin.jsx";
import AdminLogin from "./pages/AdminLogin.jsx";

const App = () => {
	const PrivateRoute = ({ element }) => {
		const isAuthenticated = document.cookie.includes("token"); // Check if JWT token exists
		console.log(isAuthenticated);
		return isAuthenticated ? element : <Navigate to="/admin" />; // Redirect if not authenticated
	  };
	return (
		<Router>
		  <Routes>
			<Route path="/" element={<Main_Portfolio/>} />
			<Route path="/admin-login" element={<AdminLogin />} />
			<Route path="/admin" element={<PrivateRoute element={<Admin />} />} />
		  </Routes>
		</Router>
	  );
};

export default App;
