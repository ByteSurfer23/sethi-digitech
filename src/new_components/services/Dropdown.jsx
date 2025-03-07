import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { IoIosArrowDown } from "react-icons/io";

const faqData = [
  {
    question: "AI & Productivity Consulting",
    answer:
      "Leverage AI-powered solutions to streamline operations and enhance productivity. From automation to data analytics, we help businesses work smarter and scale faster.",
  },
  {
    question: "Digital Marketing",
    answer:
      "Boost your brand’s online presence with data-driven strategies. We specialize in SEO, social media marketing, and targeted campaigns to drive engagement and conversions.",
  },
  {
    question: "Web Developer",
    answer:
      "Build fast, responsive, and scalable websites tailored to your business needs. From sleek designs to seamless user experiences, we bring your vision to life.",
  },
];

const Dropdown = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("faq-section");
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

  const toggleDropdown = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <motion.div
      id="faq-section"
      initial={{ opacity: 0, y: 50 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-full px-6 py-10 md:px-40 "
    >
      <h2 className="text-3xl font-bold text-white text-center mb-4">Explore Our Services</h2>
      <p className="text-gray-400 text-center mb-6">
        Learn more about our services
      </p>

      <div className="space-y-4">
        {faqData.map((item, index) => (
          <div key={index} className="border-b border-gray-300 w-full">
            <button
              onClick={() => toggleDropdown(index)}
              className="w-full text-left py-3 text-lg font-semibold text-white flex justify-between items-center"
            >
              {item.question}
              <IoIosArrowDown
                className={`transition-transform transform ${
                  openIndex === index ? "rotate-180" : "rotate-0"
                }`}
              />
            </button>

            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={openIndex === index ? { opacity: 1, height: "auto" } : {}}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <p className="text-gray-400 py-2">{item.answer}</p>
            </motion.div>
          </div>
        ))}
      </div>

    </motion.div>
  );
};

export default Dropdown;
