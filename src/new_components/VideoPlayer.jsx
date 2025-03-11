"use client";
import { motion } from "framer-motion";

export default function VideoPlayer() {
  return (
    <div className="flex flex-col justify-center items-center bg-transparent p-4">
      {/* Animated Heading */}
      <motion.h2
        className="text-white text-2xl sm:text-4xl font-bold mb-4 text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        Our Founder's Speech
      </motion.h2>

      {/* Video Container */}
      <motion.div
        className="bg-gray-800 p-4 rounded-lg shadow-lg w-[90%] sm:w-[70%] md:w-[50%] lg:w-[40%]"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <video
          className="w-full h-[180px] sm:h-[400px] md:h-[600px] rounded-md"
          controls
          autoPlay
        >
          <source src="https://res.cloudinary.com/ddljq4uyx/video/upload/v1741694940/sethi_video_uift5e.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </motion.div>
    </div>
  );
}
