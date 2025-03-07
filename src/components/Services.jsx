import React, { useEffect, useState, useRef } from "react";
import { motion, useAnimation } from "framer-motion";

const services = [
  "SEO Optimization",
  "Pay-Per-Click (PPC)",
  "Content Marketing",
  "Social Media Marketing",
  "Email Marketing",
  "Affiliate Marketing",
  "Web Analytics",
  "Brand Strategy",
];

const ServiceItem = ({ title, index }) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const isLeft = index % 2 === 0;
  const [xOffset, setXOffset] = useState(80);

  useEffect(() => {
    const updateXOffset = () => {
      if (window.innerWidth <= 1024) {
        setXOffset(0);
      } else {
        setXOffset(window.innerWidth * 0.05);
      }
    };

    updateXOffset();
    window.addEventListener("resize", updateXOffset);
    return () => window.removeEventListener("resize", updateXOffset);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          controls.start("visible");
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [controls]);

  const variants = {
    hidden: { opacity: 0, x: isLeft ? -300 : 300 },
    visible: {
      opacity: 1,
      x: isLeft ? -xOffset : xOffset,
      transition: { duration: 1 },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      variants={variants}
      className={`flex items-center w-full max-w-5xl mx-auto p-6 mb-6 border border-gray-500 rounded-lg shadow-lg transition-shadow duration-300 hover:shadow-2xl hover:shadow-gray-800
        lg:${
          isLeft ? "justify-start text-left" : "justify-end text-right"
        } md:justify-center md:text-center
      `}
    >
      {/* Left Side - Text First */}
      {isLeft && (
        <div className="max-w-md text-left md:text-center">
          <h2 className="text-lg sm:text-xl lg:text-2xl font-bold mb-2">{title}</h2>
          <p className="text-xs sm:text-sm lg:text-base text-gray-700">
            We provide top-notch {title} solutions to grow your business.
          </p>
        </div>
      )}

      {/* Image - Hidden on md and smaller */}
      <img
        src="https://via.placeholder.com/150"
        alt={title}
        className="w-32 h-32 lg:w-40 lg:h-40 object-cover rounded-lg mx-4 hidden md:block"
      />

      {/* Right Side - Text Last */}
      {!isLeft && (
        <div className="max-w-md text-right md:text-center">
          <h2 className="text-lg sm:text-xl lg:text-2xl font-bold mb-2">{title}</h2>
          <p className="text-xs sm:text-sm lg:text-base text-gray-700">
            We provide top-notch {title} solutions to grow your business.
          </p>
        </div>
      )}
    </motion.div>
  );
};

const Services = () => {
  return (
    <div className="w-full mx-auto p-6">
      {services.map((service, index) => (
        <ServiceItem key={index} title={service} index={index} />
      ))}
    </div>
  );
};

export default Services;
