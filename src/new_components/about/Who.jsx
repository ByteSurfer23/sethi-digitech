import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { IoIosArrowDown } from "react-icons/io";

export default function WhoWeAre() {
  const [isOpenMission, setIsOpenMission] = useState(false);
  const [isOpenVision, setIsOpenVision] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("who-we-are");
      if (section) {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.8) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div id="who-we-are" className="relative bg-transparent py-5 px-3 mt-10">
      {/* Who Are We Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-screen-xl mx-auto mb-16"
      >
        <h2 className="text-left text-3xl md:text-5xl font-bold text-gray-200 mb-4 w-full">Who are we?</h2>
        <p className="text-left text-md md:text-lg text-gray-300 max-w-3xl">
          We are a team of dedicated professionals committed to delivering top-tier solutions through innovation, expertise, 
          and a customer-focused approach. Our goal is to help businesses navigate the digital landscape with confidence 
          and success, providing tailored strategies that drive growth and efficiency.
        </p>

        {/* Our Mission Dropdown Section */}
        <div className="max-w-screen-xl mx-auto mt-16">
          <button
            className="flex items-center justify-between w-full bg-white/10 p-4 rounded-lg text-left text-xl md:text-2xl font-bold text-gray-200 transition-all duration-200 hover:bg-white/20"
            onClick={() => setIsOpenMission(!isOpenMission)}
          >
            Our Mission <IoIosArrowDown className={`transition-transform ${isOpenMission ? "rotate-180" : "rotate-0"}`} />
          </button>
          {isOpenMission && (
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="mt-4 text-md md:text-lg text-gray-300"
            >
              Our mission is to empower businesses and individuals with state-of-the-art solutions, ensuring success through 
              innovation and reliability. We strive to create transformative digital experiences that streamline processes, 
              enhance productivity, and deliver measurable results. Through collaboration and continuous improvement, we 
              aim to set new industry standards and drive sustainable growth for our clients.
            </motion.p>
          )}
        </div>

        {/* Our Vision Dropdown Section */}
        <div className="max-w-screen-xl mx-auto mt-8">
          <button
            className="flex items-center justify-between w-full bg-white/10 p-4 rounded-lg text-left text-xl md:text-2xl font-bold text-gray-200 transition-all duration-200 hover:bg-white/20"
            onClick={() => setIsOpenVision(!isOpenVision)}
          >
            Our Vision <IoIosArrowDown className={`transition-transform ${isOpenVision ? "rotate-180" : "rotate-0"}`} />
          </button>
          {isOpenVision && (
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="mt-4 text-md md:text-lg text-gray-300"
            >
              Our vision is to be the leading force in digital transformation, pioneering innovative solutions that empower 
              businesses and individuals to achieve sustainable success and industry excellence.
            </motion.p>
          )}
        </div>
      </motion.div>
    </div>
  );
}
