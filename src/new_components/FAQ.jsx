import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { IoIosArrowDown } from "react-icons/io";
import { Link } from "react-router-dom";

const faqData = [
  {
    question: "Why Sethi Digitech?",
    answer:
      "Sethi DigiTech is a digital agency focused on enhancing your online presence. We specialize in training teams to adapt to the latest AI and productivity workflows. Our goal is to empower businesses for future success.",
  },
  {
    question: "How can I enroll?",
    answer:
      "Enrolling in our programs is easy! Simply visit our AI Bootcamp page and fill out the registration form. Our team will guide you through the process.",
  },
  {
    question: "What services do you offer?",
    answer:
      "We offer a range of services including digital marketing, AI training, and productivity workshops. Our tailored solutions are designed to meet the unique needs of your business.",
  },
  {
    question: "Can I request a call?",
    answer:
      "Absolutely! You can request a call through our website. Just fill out the contact form, and we will get back to you promptly.",
  },
  {
    question: "What is the AI Bootcamp?",
    answer:
      "Our AI Bootcamp is an intensive training program designed to equip your team with essential AI skills. Participants will learn to implement AI tools effectively in their workflows.",
  },
];

const FAQSection = () => {
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
      className="w-full max-w-lg md:max-w-4xl mx-auto px-6 py-10"
    >
      <h2 className="text-3xl font-bold text-white text-center mb-4">FAQs</h2>
      <p className="text-gray-400 text-center mb-6">
        Explore our frequently asked questions to find the answers you need.
      </p>

      <div className="space-y-4">
        {faqData.map((item, index) => (
          <div key={index} className="border-b border-gray-300">
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

      <div className="mt-10 text-center">
        <h3 className="text-xl font-bold text-gray-700">Still have questions?</h3>
        <p className="text-gray-400">We're here to help you find the answers.</p>
        <Link to="/contact">
        <button className="mt-4 px-6 py-2 border border-gray-500 text-gray-500 rounded-lg hover:bg-gray-200">
        Contact
        </button>
        </Link>
      </div>
    </motion.div>
  );
};

export default FAQSection;
