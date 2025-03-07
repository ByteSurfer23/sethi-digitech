import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./new_pages/Layout";
import Home from "./new_pages/Home";
import About from "./new_pages/About";
import Services from "./new_pages/Services";
import Train from "./new_pages/Train";
import Contact from "./new_pages/Contact";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="training" element={<Train />} />
          <Route path="contact" element={<Contact/>} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
