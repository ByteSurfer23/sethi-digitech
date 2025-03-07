import { motion } from "framer-motion";

const companies = [
  { id: 1, img: "https://via.placeholder.com/40", name: "AI & Productivity Consulting", desc: "Leading in tech innovation." },
  { id: 2, img: "https://via.placeholder.com/40", name: "Digital Marketing", desc: "Excellence in software solutions." },
  { id: 3, img: "https://via.placeholder.com/40", name: "Web Development", desc: "Pioneering AI advancements." }
];

export default function ServiceGrid() {
  return (
    <div className="relative bg-transparent py-20 px-4 text-center">
      <h2 className="text-center text-2xl sm:text-4xl font-bold text-gray-200 mb-8">Our Services</h2>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 max-w-screen-xl mx-auto justify-items-center">
        {companies.map((company, index) => (
          <motion.div
            key={company.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            whileHover={{ scale: 1.05 }}
            className="bg-gray-300 p-6 rounded-lg shadow-md text-center transform transition-all duration-300 w-60 sm:w-80"
          >
            <img src={company.img} alt={company.name} className="w-14 h-14 mx-auto" />
            <h3 className="mt-2 text-xl font-bold text-gray-900">{company.name}</h3>
            <p className="text-md text-gray-700 mt-1">{company.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}