import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function TextSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById("text-section");
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.8) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.div
      id="text-section"
      initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
      animate={isVisible ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="p-3 sm:p-8 w-[94%] mx-auto flex flex-col md:flex-row gap-6 h-[70vh]"
    >
      <div className="flex-1 bg-blue-500 text-white p-10 flex items-start justify-center text-center md:text-left rounded-xl h-full">
        <h1 className="text-4xl sm:text-6xl leading-[1.5] font-bold">Leverage AI, Maximize Efficiency, Stay Ahead.</h1>
      </div>
      <div className="flex-1 bg-gray-300 text-black p-10 flex items-center justify-center text-center md:text-left rounded-xl h-full text-md sm:text-lg">
        <p className="text-xs sm:text-lg leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    </motion.div>
  );
}