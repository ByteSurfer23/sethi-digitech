import { motion } from "framer-motion";
import { FaChalkboardTeacher, FaHandsHelping, FaTools, FaHeadset } from "react-icons/fa";

const values = [
  {
    icon: <FaChalkboardTeacher size={24} />, 
    title: "Tailored Training Sessions",
    text: "Personalized AI training programs to fit your team's unique needs, driving better adoption and efficiency."
  },
  {
    icon: <FaHandsHelping size={24} />, 
    title: "Hands-On Learning",
    text: "Experience interactive AI learning through real-world applications, fostering a deeper understanding."
  },
  {
    icon: <FaTools size={24} />, 
    title: "Latest AI Tools & Strategies",
    text: "Get hands-on with the newest AI tools and proven strategies to stay ahead of the curve."
  },
  {
    icon: <FaHeadset size={24} />, 
    title: "Ongoing Support & Consultations",
    text: "Continuous AI mentorship and consultation to ensure smooth implementation and long-term success."
  }
];

export default function How() {
  return (
    <div id="values-section" className="py-16 px-4 max-w-screen-xl mx-auto">
      {/* Heading Animation */}
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="text-3xl md:text-5xl font-bold text-gray-100 text-center md:text-left mb-10"
      >
        Our Values
      </motion.h2>

      {/* Grid with Animated Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {values.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 80, scale: 0.9, filter: "blur(12px)" }}
            whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: index * 0.2 }}
            className="bg-gradient-to-r from-blue-800 to-indigo-900 p-8 rounded-2xl shadow-2xl text-gray-100 transition-all duration-300"
          >
            <h3 className="text-xl font-bold mb-3 flex items-center gap-3">
              {item.icon} {item.title}
            </h3>
            <p className="text-gray-300 text-md leading-relaxed">{item.text}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}