import { motion } from "framer-motion";
import { FaLightbulb, FaChartLine, FaCogs, FaUsers } from "react-icons/fa";

const values = [
  {
    icon: <FaLightbulb size={24} />, 
    title: "Work Smarter",
    text: "Leverage AI-driven insights to optimize workflows and enhance efficiency, allowing you to focus on what truly matters."
  },
  {
    icon: <FaCogs size={24} />, 
    title: "Increase Productivity",
    text: "Streamline repetitive tasks and maximize your team's output with cutting-edge automation and smart integrations."
  },
  {
    icon: <FaChartLine size={24} />, 
    title: "Stay Competitive",
    text: "Adapt to market changes faster, gain strategic advantages, and outperform competitors with AI-powered solutions."
  },
  {
    icon: <FaUsers size={24} />, 
    title: "Future-Proof Your Team",
    text: "Equip your workforce with the latest technology and skills to stay ahead in an ever-evolving digital landscape."
  }
];

export default function Why() {
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
        Our Values
      </motion.h2>

      {/* Grid with Animated Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {values.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }} // Animate only once
            transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.2 }}
            className="bg-white/10 p-6 rounded-lg shadow-md text-gray-200 transition-all duration-200"
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
