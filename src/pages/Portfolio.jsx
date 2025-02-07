import { useState, useEffect } from "react";
import Intro from "../components/Intro.jsx";
import Portfolio from "../components/Portfolio.jsx";
import Timeline from "../components/Timeline.jsx";
import Contact from "../components/Contact.jsx";
import Footer from "../components/Footer.jsx";
import axios from "axios";

const Main_Portfolio = () => {
  const [job_heading, setJobHeading] = useState(null);
  const [about_text, setAboutText] = useState(null);
  const [data_array, setDataArray] = useState([]);
  const [theme, setTheme] = useState(null);
  const [imageData, setImageData] = useState([]); // Stores image details

  // Fetch portfolio data
  const fetchPortfolio = async () => {
    try {
      console.log("Fetching portfolio data...");
      const response = await axios.get("http://localhost:3000/"); // Replace with your API
      console.log("Response from API:", response.data);

      setJobHeading(response.data.job_heading);
      setAboutText(response.data.about_text);
      setDataArray([...response.data.time_line]);

      // Store images in an array
      const images = [
        { id: 1, ...response.data.image1 },
        { id: 2, ...response.data.image2 },
        { id: 3, ...response.data.image3 },
      ].filter(img => img.url); // Remove empty images

      setImageData(images);
    } catch (error) {
      console.error("Error fetching portfolio:", error);
    }
  };

  // Fetch data on component mount
  useEffect(() => {
    fetchPortfolio();
  }, []);

  // Handle theme switching
  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  // Add/remove dark theme class based on theme state
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const sun = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"/>
</svg>

const moon = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
<path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"/>
</svg>

  return (
    <div className="bg-white dark:bg-stone-900 relative">
      <button
        type="button"
        onClick={handleThemeSwitch}
        className="p-2 z-10 right-10 top-4 bg-violet-300 dark:bg-orange-300 text-lg rounded-md absolute"
      >
        {theme === "dark" ? sun : moon}
      </button>
      <div className="bg-white dark:bg-stone-900 text-stone-900 dark:text-stone-300 min-h-screen font-inter max-w-5xl w-11/12 mx-auto">
        <Intro about_text={about_text} job_heading={job_heading} />
        <Portfolio image_data={imageData} /> {/* Pass images to Portfolio */}
        <Timeline data_array={data_array} />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default Main_Portfolio;
