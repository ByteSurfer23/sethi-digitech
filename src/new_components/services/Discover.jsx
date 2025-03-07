import { motion } from "framer-motion";
import { FaBullhorn, FaBullseye, FaPaintBrush, FaSearch, FaStore, FaVideo } from "react-icons/fa";

const values = [
  {
    icon: <FaBullhorn className="w-6 h-6 mr-2 text-blue-400" />,
    title: "Content Marketing",
    text: "Success isn’t just about great campaigns—it’s about people. We equip businesses and their teams with the right skills, tools, and AI-powered workflows to stay future-ready and unstoppable.",
  },
  {
    icon: <FaBullseye className="w-6 h-6 mr-2 text-red-400" />,
    title: "Social Media Marketing",
    text: "Vanity metrics don’t excite us—real growth does. Every strategy we design is data-driven, ROI-focused, and tailored to bring measurable success to your business.",
  },
  {
    icon: <FaPaintBrush className="w-6 h-6 mr-2 text-yellow-400" />,
    title: "Graphic Design",
    text: "We don’t do generic. Every design, campaign, and strategy we create is infused with originality, storytelling, and innovation, making sure your brand stands out in a crowded digital world.",
  },
  {
    icon: <FaSearch className="w-6 h-6 mr-2 text-green-400" />,
    title: "SEO",
    text: "Your success is our success. We operate with transparency, honesty, and commitment, ensuring that every solution we offer is in your best interest.",
  },
  {
    icon: <FaStore className="w-6 h-6 mr-2 text-purple-400" />,
    title: "Google Business Profile",
    text: "We don’t do generic. Every design, campaign, and strategy we create is infused with originality, storytelling, and innovation, making sure your brand stands out in a crowded digital world.",
  },
  {
    icon: <FaVideo className="w-6 h-6 mr-2 text-pink-400" />,
    title: "Video Production & Editing",
    text: "Your success is our success. We operate with transparency, honesty, and commitment, ensuring that every solution we offer is in your best interest.",
  },
];

export default function Features() {
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
        Features we offer
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
            <h3 className="text-xl font-bold mb-2 flex items-center">
              {item.icon} {item.title}
            </h3>
            <p className="text-gray-300 text-md">{item.text}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
