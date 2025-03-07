import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaInstagram, FaFacebook, FaWhatsapp } from "react-icons/fa";

const data = [
  { id: 1, img: "https://via.placeholder.com/300", title: "Card 1", desc: "Short desc", text: "Some additional text" },
  { id: 2, img: "https://via.placeholder.com/300", title: "Card 2", desc: "Short desc", text: "Some additional text" },
  { id: 3, img: "https://via.placeholder.com/300", title: "Card 3", desc: "Short desc", text: "Some additional text" },
  { id: 4, img: "https://via.placeholder.com/300", title: "Card 4", desc: "Short desc", text: "Some additional text" },
  { id: 5, img: "https://via.placeholder.com/300", title: "Card 5", desc: "Short desc", text: "Some additional text" },
  { id: 6, img: "https://via.placeholder.com/300", title: "Card 6", desc: "Short desc", text: "Some additional text" },
];

const Carousel = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
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
      <h2 className="text-4xl sm:text-5xl font-bold text-white w-full mb-8">Carousel Section</h2>
      <Slider {...settings}>
        {data.map((item) => (
          <div key={item.id} className="p-4">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              {/* Image */}
              <img src={item.img} alt={item.title} className="w-full h-40 object-cover" />

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
