import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaInstagram, FaFacebook, FaWhatsapp } from "react-icons/fa";

const data = [
  { id: 1, img: "https://res.cloudinary.com/ddljq4uyx/image/upload/v1741676302/Vansh_Sethi_hrbfz4.jpg", title: "Vansh Sethi", desc: "Founder" },
  { id: 2, img: "https://res.cloudinary.com/ddljq4uyx/image/upload/v1741710111/cofounder_3_mm03t0.jpg", title: "Surekha Sethi", desc: "Co-Founder"},
  { id: 3, img: "https://res.cloudinary.com/ddljq4uyx/image/upload/v1741710434/creativehead_frrjjx.jpg", title: "Harshika Sethi", desc: "Creative Head"},
];

const Carousel = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 4 } }, // lg and above
      { breakpoint: 768, settings: { slidesToShow: 3 } }, // md
      { breakpoint: 640, settings: { slidesToShow: 1 } }, // sm and below
    ],
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1, ease: "easeOut" }}
      className="w-full max-w-7xl mx-auto py-10 px-10"
    >
      <h2 className="text-4xl sm:text-5xl font-bold text-white w-full mb-8">Our Team</h2>
      <Slider {...settings}>
        {data.map((item) => (
          <div key={item.id} className="p-4">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              {/* Image */}
              <img src={item.img} alt={item.title} className="w-full h-80 object-cover" />

              {/* Content */}
              <div className="p-4 bg-stone-400">
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="text-gray-200">{item.desc}</p>

                {/* Additional Text */}
                <p className="mt-2 text-sm text-gray-700">{item.text}</p>

                {/* Social Icons */}
                <div className="flex justify-center space-x-4 mt-4 text-gray-700">
                  <FaInstagram size={20} />
                  <FaFacebook size={20} />
                  <FaWhatsapp size={20} />
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </motion.div>
  );
};

export default Carousel;
