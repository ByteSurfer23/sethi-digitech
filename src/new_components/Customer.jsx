import React from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Mr. Yogesh Sethi",
    role: "(Founder, Shine Dental Care & Implant Centre)",
    review: "Played a vital role in digitally marketing our Dental Clinic business. The owner is skilled in Managing Google Business Profiles, SEO, Social Media Marketing, Logo Design & Brand Strategy. Highly recommended for Digital Marketing Services.",
  },
  {
    name: "Rajiv Mehta",
    role: "(Manager, Future Tech)",
    review: "Sethi DigiTech has been a game-changer for us! Their structured Content Creation Framework streamlined our strategy, while their expert handling of our social media, content writing, video editing, and design services has amplified our brand’s impact. Highly recommended!",
  },
  {
    name: "Md. Nadeem",
    role: "(Founder, Hijama For Wellness)",
    review: "Sethi DigiTech helped us establish a strong digital presence by setting up and managing our Google Business Profile. Their logo and banner services gave our brand a professional identity, and their expert insights have been invaluable in scaling our online reach. Highly recommended!",
  },
  {
    name: "Anonymous",
    role: "(Founder, Courses Wallah)",
    review: "Sethi DigiTech delivered exactly what we needed—a sleek, high-converting website with an eCommerce store and landing page. Their expertise in logo design, content writing, and Telegram marketing gave our brand the perfect launchpad for success. Highly impressed!",
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
              <div>
                <p className="text-gray-400 font-semibold">{testimonial.name}</p>
                <p className="text-gray-400 text-sm">{testimonial.role}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialSection;
