import { useState, useEffect } from "react";
import { Outlet, Link } from "react-router-dom";
import Footer from "../new_components/Footer";
import ReachOut from "../new_components/Reach";
import { AiOutlineMail } from "react-icons/ai";
const Layout = () => {
  const [theme, setTheme] = useState("dark");

  // Handle theme switching
  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  // Apply dark mode class
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const sun = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-5 h-5 sm:w-6 sm:h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
      />
    </svg>
  );

  const moon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-5 h-5 sm:w-6 sm:h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
      />
    </svg>
  );

  return (
    <div className="bg-white dark:bg-stone-900 relative min-h-screen">
      {/* Theme Toggle Button */}
      <button
        type="button"
        onClick={()=>{}}
        className="p-2 z-10 right-2 sm:right-3 top-2 sm:top-4 dark:bg-blue-300 text-sm sm:text-lg rounded-md absolute shadow-md hover:shadow-lg transition-all hover:-translate-y-1  sm:mr-5  mr-2"
      >
        <Link to="/contact"><AiOutlineMail className="w-5 h-5 sm:w-6 sm:h-6" /></Link>

      </button>

      {/* Navbar */}
      <nav className=" flex items-center justify-center py-2 px-4 sm:py-2 sm:px-4 bg-white dark:bg-stone-900 text-stone-900 dark:text-stone-500 ">
        
 
        
        <div className="ml-1 sm:ml-2 flex-shrink-0 w-6 h-6 sm:w-8 sm:h-8">
          {/* Logo Placeholder */}

        </div>
        <div className="border-stone-800 border-[1px]  flex sm:space-x-4 text-xs sm:text-sm md:text-base font-medium shadow-md px-2 py-1 sm:px-3 sm:py-2 rounded-md transition-transform transform hover:shadow-xl hover:-translate-y-1">
        <Link to="/" className=" hover:bg-blue-300 px-2 py-1 sm:px-3 sm:py-2 rounded-md shadow-md hover:shadow-md transition-all">
            Home
          </Link>
          <Link to="/about" className=" hover:bg-blue-300 px-2 py-1 sm:px-3 sm:py-2 rounded-md shadow-md hover:shadow-md transition-all">
            About
          </Link>
          <Link to="/services" className="hover:bg-blue-300 px-2 py-1 sm:px-3 sm:py-2 rounded-md shadow-md hover:shadow-md transition-all">
            Services
          </Link>
          <Link to="/training" className=" hover:bg-blue-300 px-2 py-1 sm:px-3 sm:py-2 rounded-md shadow-md hover:shadow-md transition-all">
            Training
          </Link>
        </div>
      </nav>

      {/* Page Content */}
      <div className=" bg-stone-900 text-stone-900 dark:text-stone-300 min-h-screen font-inter w-full mx-auto">
        <Outlet/>
      </div>
      <ReachOut/>
      <Footer/>
    </div>

);
};

export default Layout;
