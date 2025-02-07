import Main_Portfolio from "./pages/Portfolio.jsx";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Admin from "./pages/Admin.jsx";
const App = () => {
	return (
		<Router>
		  <Routes>
			<Route path="/" element={<Main_Portfolio/>} />
			<Route path="/admin" element={<Admin />} />
		  </Routes>
		</Router>
	  );
};

export default App;
