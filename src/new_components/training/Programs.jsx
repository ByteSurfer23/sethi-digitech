import { motion } from "framer-motion";
import { FaRobot, FaBolt, FaPenFancy, FaChartBar } from "react-icons/fa";

const values = [
  {
    icon: <FaRobot size={24} />, 
    title: "AI in Business Growth",
    text: "Harness AI to drive innovation, improve decision-making, and unlock new opportunities for scaling your business."
  },
  {
    icon: <FaBolt size={24} />, 
    title: "AI-Powered Productivity Hacks",
    text: "Utilize intelligent automation to eliminate inefficiencies, boost productivity, and save valuable time."
  },
  {
    icon: <FaPenFancy size={24} />, 
    title: "AI in Content Creation",
    text: "Leverage AI-driven tools to craft compelling content, streamline creative processes, and enhance engagement."
  },
  {
    icon: <FaChartBar size={24} />, 
    title: "AI for Data & Analytics",
    text: "Turn complex data into actionable insights using AI-powered analytics, helping you stay ahead of market trends."
  }
];

export default function Programs() {
  return (
    <div id="values-section" className="py-16 px-2 max-w-screen-xl mx-auto">
      {/* Heading Animation */}
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-3xl md:text-5xl font-bold text-gray-200 text-center md:text-left mb-8"
      >
        Our Programs
      </motion.h2>

      {/* Grid with Animated Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {values.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: -50, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.2 }} // Animate only once
            transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.2 }}
            className="bg-blue-900 p-6 rounded-xl shadow-lg text-gray-200 transition-all duration-300"
          >
            <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
              {item.icon} {item.title}
            </h3>
            <p className="text-gray-300 text-md">{item.text}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}