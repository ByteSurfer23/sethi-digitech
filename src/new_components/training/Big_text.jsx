import { motion } from "framer-motion";

export default function UnlockAIPotential() {
  return (
    <div className="flex flex-col items-center justify-center text-center py-16 px-4 max-w-screen-xl mx-auto">
      <motion.h1
        initial={{ opacity: 0, y: 100, filter: "blur(10px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="text-3xl md:text-6xl font-bold text-gray-100 mb-6"
      >
        Ready to Unlock AI's Full Potential?
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 100, filter: "blur(10px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
        className="text-md md:text-xl text-gray-300 max-w-2xl"
      >
        Discover how AI can transform your business, boost productivity, and keep you ahead of the competition. Let's explore the possibilities together!
      </motion.p>
    </div>
  );
}
