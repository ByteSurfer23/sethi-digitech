import { useEffect, useState } from "react";
import { motion } from "framer-motion";


const VerticalCarousel = () => {
  const [cards, setCards] = useState([
    { id: 1, title: "Some title over here", description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum, voluptatem. Dignissimos, laudantium velit harum, ullam error at fugit.", city: "Doha, Qatar", img: " " },
    { id: 2, title: "Some title over here", description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum, voluptatem. Dignissimos, laudantium velit harum, ullam error at fugit.", city: "Doha, Qatar", img: " " },
    { id: 3, title: "Some title over here", description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum, voluptatem. Dignissimos, laudantium velit harum, ullam error at fugit.", city: "Doha, Qatar", img: " " },
    { id: 4, title: "Some title over here", description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum, voluptatem. Dignissimos, laudantium velit harum, ullam error at fugit.", city: "Doha, Qatar", img: " " },
    { id: 5, title: "Some title over here", description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum, voluptatem. Dignissimos, laudantium velit harum, ullam error at fugit.", city: "Doha, Qatar", img: " " },
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCards((prevCards) => {
        const firstElem = prevCards.shift();
        return [...prevCards, firstElem];
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex h-screen justify-center items-center bg-gradient-to-b from-blue-900 to-black overflow-hidden">
      <div className="flex-[0.6] mt-10 relative">
        <div className="relative ml-12 w-[530px] h-[400px]">
          {cards.map((card, index) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 120 }}
              animate={{ opacity: index === 0 ? 0 : 1, y: index * 50 }}
              transition={{ duration: 0.5 }}
              className={`absolute w-[530px] p-6 bg-white rounded-lg shadow-lg flex items-center ${
                index === 1 ? "z-10" : "z-0"
              }`}
            >
              <div className="w-[60px] h-[60px] rounded-full shadow-md flex justify-center items-center bg-white">
                <img src={card.img} alt="profile" className="w-[53px] h-[53px] rounded-full object-cover" />
              </div>
              <div className="ml-6 w-[374px]">
                <h4 className="text-gray-800 text-lg font-semibold">{card.title}</h4>
                <p className="text-gray-600 text-sm mt-2">{card.description}</p>
                <p className="text-gray-500 text-xs font-medium uppercase mt-2">{card.city}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="flex-[0.4]">
        <img alt="Cartoon" className="w-[80%] object-contain" />
      </div>
    </div>
  );
};

export default VerticalCarousel;
