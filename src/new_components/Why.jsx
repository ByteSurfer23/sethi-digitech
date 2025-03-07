import { motion } from "framer-motion";
import { FaThumbsUp, FaUserShield, FaRocket, FaHeadset } from "react-icons/fa";

const whyUsPoints = [
  { id: 1, title: "Expertise & Innovation", icon: <FaRocket />, desc: "We bring cutting-edge technology and expertise to every project." },
  { id: 2, title: "Client-Centric Approach", icon: <FaUserShield />, desc: "Your goals are our priority. We tailor solutions to fit your needs." },
  { id: 3, title: "Reliable Support", icon: <FaHeadset />, desc: "24/7 customer support ensuring smooth operations and guidance." },
  { id: 4, title: "Proven Success", icon: <FaThumbsUp />, desc: "We have a track record of delivering high-impact results." }
];

export default function WhyUs() {
  return (
    <div className="relative bg-transparent py-20 px-6">
      <h2 className="text-left text-3xl md:text-4xl font-bold text-gray-200 mb-8 max-w-screen-xl mx-auto">Why Choose Us?</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-screen-xl mx-auto">
        {whyUsPoints.map((point, index) => (
          <motion.div
            key={point.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            whileHover={{ scale: 1.05, transition: { duration: 0.15 } }} 
className="backdrop-blur-md bg-white/10 p-6 rounded-lg shadow-md flex items-center justify-between transform transition-all duration-150 w-full hover:scale-105"

          >
            <div className="text-left">
              <h3 className="text-lg md:text-xl font-bold text-gray-200 mb-2">{point.title}</h3>
              <p className="text-sm md:text-md text-gray-300">{point.desc}</p>
            </div>
            <motion.div whileHover={{ scale: 1.1 }} className="text-gray-200 text-2xl md:text-3xl">{point.icon}</motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
