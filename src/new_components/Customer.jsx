import React from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Aditi Sharma",
    role: "CEO, Tech Innovations",
    company: "Webflow",
    review: "Sethi DigiTech revolutionized our online presence and efficiency!",
    image: "https://via.placeholder.com/50",
  },
  {
    name: "Rajiv Mehta",
    role: "Manager, Future Tech",
    company: "Webflow",
    review: "Their training program was a game changer for our team!",
    image: "https://via.placeholder.com/50",
  },
  {
    name: "Simran Kapoor",
    role: "Founder, AI Solutions",
    company: "Webflow",
    review: "Exceptional service! Their AI solutions transformed our workflow.",
    image: "https://via.placeholder.com/50",
  },
  {
    name: "Kunal Verma",
    role: "CTO, Digital Labs",
    company: "Webflow",
    review: "Highly professional team. Their strategies boosted our efficiency!",
    image: "https://via.placeholder.com/50",
  },
];

const TestimonialSection = () => {
  return (
    <div className="w-full max-w-7xl mx-auto px-6 py-12">
      {/* Title */}
      <h2 className="text-3xl font-bold text-black text-center mb-4">
        Customer Testimonials
      </h2>
      <p className="text-gray-400 text-center mb-8">
        Transforming businesses through innovative digital solutions.
      </p>

      {/* Testimonials Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="p-6 border border-gray-300 rounded-lg shadow-md"
          >
            {/* Stars */}
            <div className="flex space-x-1 mb-3">
              {Array(5)
                .fill("")
                .map((_, i) => (
                  <span key={i} className="text-yellow-500">★</span>
                ))}
            </div>

            {/* Review */}
            <p className="text-stone-400 italic mb-4">"{testimonial.review}"</p>

            {/* Author */}
            <div className="flex items-center space-x-3">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-10 h-10 rounded-full"
              />
              <div>
                <p className="text-gray-400 font-semibold">{testimonial.name}</p>
                <p className="text-gray-400 text-sm">{testimonial.role}</p>
              </div>
              <span className="ml-auto text-gray-400 font-semibold">{testimonial.company}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialSection;
