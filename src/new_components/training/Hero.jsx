export default function HeroSection() {
    return (
      <div
        className="relative flex items-center justify-center w-[90%] mx-auto h-[70vh] sm:h-[60vh] bg-cover bg-center text-white p-4 rounded-xl mt-10 motion-opacity-in-0 motion-translate-y-in-100 motion-blur-in-md"
        style={{ backgroundImage: "url('https://res.cloudinary.com/ddljq4uyx/image/upload/v1741677037/AI_3_n34wtz.jpg')" }}
      >
        <div className="relative max-w-md text-center motion-opacity-in-0 motion-translate-y-in-100 motion-blur-in-md">
          <h1 className="text-3xl sm:text-5xl font-bold">
            Embrace AI, Elevate Productivity, Stay Ahead
          </h1>
        </div>
      </div>
    );
  }
  