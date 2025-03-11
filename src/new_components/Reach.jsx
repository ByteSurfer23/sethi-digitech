import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const ReachOut = () => {
  return (
    <section className="w-full py-16 px-4 md:px-10 text-white">
      <div className="max-w-7xl mx-auto">
        
        {/* Heading Section with Scroll Animation */}
        <motion.div 
          initial={{ opacity: 0, y: 100 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1.5, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }} // Trigger when 30% visible
          className="mb-14 text-center md:text-left"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Reach Out
          </h1>
          <h3 className="text-lg md:text-xl text-stone-500 mt-3">
            We're here to support you
          </h3>
        </motion.div>

        <div className="flex flex-col md:flex-row items-center gap-12">
          
          {/* Contact Info with Scroll Animation */}
          <motion.div 
            initial={{ opacity: 0, x: -150 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            transition={{ duration: 2, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.2 }}
            className="flex-1 text-left space-y-8"
          >
            {/* Email Section */}
            <div>
              <div className="flex items-center gap-3 text-lg font-semibold">
                <FaEnvelope className="text-blue-400 text-xl" />
                <span>Email</span>
              </div>
              <p className="text-gray-300 mt-1">Contact us anytime</p>
              <a href="mailto:sethidigitech@gmail.com" className="text-blue-400 hover:underline">
              sethidigitech@gmail.com
              </a>
            </div>

            {/* Phone Section */}
            <div>
              <div className="flex items-center gap-3 text-lg font-semibold">
                <FaPhone className="text-green-400 text-xl" />
                <span>Phone</span>
              </div>
              <p className="text-gray-300 mt-1">Call for support</p>
              <a href="tel:++919354231079" className="text-blue-400 hover:underline">
              +91 9354231079
              </a>
            </div>

            {/* Office Section */}
            <div>
              <div className="flex items-center gap-3 text-lg font-semibold">
                <FaMapMarkerAlt className="text-red-400 text-xl" />
                <span>Office</span>
              </div>
              <p className="text-gray-300 mt-1">Our Location</p>
              <p>456 Digital Lane, New Delhi, 110001, India</p>
            </div>
          </motion.div>

          {/* Image Component with Scroll Animation */}
          <motion.div 
            initial={{ opacity: 0, x: 150 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            transition={{ duration: 2, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.2 }}
            className="flex-1"
          >
            <div className="w-full h-64 bg-transparent flex items-center justify-center">
  <img 
    src="https://res.cloudinary.com/ddljq4uyx/image/upload/v1741679305/Sethi_DigiTech_Logo_ainocd.svg" 
    alt="Logo" 
    className="max-w-full max-h-full object-contain"
  />
</div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default ReachOut;
