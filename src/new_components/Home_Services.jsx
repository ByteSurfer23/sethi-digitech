import { motion } from "framer-motion";
import { FaRobot, FaGlobe, FaChartLine, FaLaptopCode } from "react-icons/fa";

const services = [
  { id: 1, title: "AI Productivity Consulting", icon: <FaRobot />, desc: "Optimizing workflows with AI-driven solutions." },
  { id: 2, title: "Web Development", icon: <FaLaptopCode />, desc: "Building modern and scalable web applications." },
  { id: 3, title: "SEO & Digital Marketing", icon: <FaChartLine />, desc: "Enhancing online presence through strategic marketing." },
  { id: 4, title: "Social Media Management", icon: <FaGlobe />, desc: "Creating and managing effective social media campaigns." }
];

export default function ServicesGrid() {
  return (
    <div className="relative bg-transparent py-20 px-6">
      <h2 className="text-left text-3xl md:text-4xl font-bold text-gray-200 mb-8 max-w-screen-xl mx-auto motion-translate-y-in-100 motion-duration-[2s] motion-ease-spring-smooth">Our Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-screen-xl mx-auto">
        {services.map((service) => (
          <motion.div
            key={service.id}
            whileHover={{ scale: 1.05 }}
            className="backdrop-blur-lg bg-white/10 p-6 rounded-lg shadow-md flex items-center justify-between transform transition-all duration-300 w-full motion-translate-y-in-100 motion-duration-[2s] motion-ease-spring-smooth"
          >
            <div className="text-left">
              <h3 className="text-lg md:text-xl font-bold text-gray-200 mb-2">{service.title}</h3>
              <p className="text-sm md:text-md text-gray-300">{service.desc}</p>
            </div>
            <div className="text-gray-200 text-2xl md:text-3xl">{service.icon}</div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
