import { motion } from "framer-motion";

const companies = [
  { id: 1, img: "https://res.cloudinary.com/ddljq4uyx/image/upload/v1741631423/courses_wallah_bu2i0u.jpg", name: "Courses Wallah", desc: "One-Stop Destination for Premium Coding & Creative Courses at an Unbeatable Price", link:"https://courseswallah.framer.website/"},
  { id: 2, img: "https://res.cloudinary.com/ddljq4uyx/image/upload/v1741631433/Hijama_For_Wellness_Lajpat_Nagar_bw3toh.png", name: "Hijama for wellness", desc: "Your Premier Destination for Cupping Therapy and Holistic Health" , link:"https://g.co/kgs/vEeCriY"},
  { id: 3, img: "https://res.cloudinary.com/ddljq4uyx/image/upload/v1741631375/cgf_bioenergy_logo_f83pxq.jpg", name: "BioSarthi", desc: "Empowering Biogas Ecosystem with Data and AI" , link:"https://biosarthi.com/"},
  { id: 4, img: "https://res.cloudinary.com/ddljq4uyx/image/upload/v1741631445/Kitebaazlogo_u4v0ce.jpg", name: "Kitebaaz", desc: "Ultimate Destination for All Kite Enthusiasts" , link:"https://g.co/kgs/bNDFNPF"},
  { id: 5, img: "https://res.cloudinary.com/ddljq4uyx/image/upload/v1741631456/Shine_Dental_Care_Logo_copy_vhpg3x.png", name: "Shine Dental Care & Implant Centre", desc: "Your Smile is Our Passion" , link:"https://sites.google.com/view/shinedental-care"},
  { id: 6, img: "https://res.cloudinary.com/ddljq4uyx/image/upload/v1741631439/IncircoAcademy_bwb7be.png", name: "Incirco Academy", desc: "Your gateway to a career in eCommerce is here" , link:"https://academy.incirco.com/"}
];

export default function BrandGrid() {
  return (
    <div className="relative bg-transparent py-20 px-4 text-center">
      <h2 className="text-center text-2xl sm:text-4xl font-bold text-gray-200 mb-8">Brands we have worked with</h2>
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
            {/* <a 
              href={company.link} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="absolute inset-0"
            /> */}
            <img src={company.img} alt={company.name} className="w-14 h-14 mx-auto" />
            <h3 className="mt-2 text-xl font-bold text-gray-900">{company.name}</h3>
            <p className="text-md text-gray-700 mt-1">{company.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}