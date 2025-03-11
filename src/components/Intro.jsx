import React from "react";
import { TypeAnimation } from "react-type-animation";

const MainText = ({ theme }) => {
  return (
    <div className="motion-opacity-in-0 motion-translate-y-in-100 motion-blur-in-md pt-20 pb-6">
      <div className="flex items-center justify-center flex-col text-center">
        {/* First Line: Sethi Digital */}
        <div className="flex flex-wrap justify-center text-5xl sm:text-8xl md:text-9xl font-semibold">
          <text className={"text-white"}>
            Sethi
          </text>
          <span className={`${theme === "light" ? "text-gray-400" : "text-blue-400"} inline-block ml-2`}>
            {"DigiTech".split("").map((letter, index) => (
              <span
                key={index}
                className="inline-block"
                style={{
                  animation: `bounce 1s infinite ${index * 0.1}s`,
                  display: "inline-block",
                }}
              >
                {letter}
              </span>
            ))}
          </span>
        </div>

        {/* Second Line: Marketing Solutions */}


        {/* Animated Text Below */}
        <div className="mt-4 sm:mt-8 w-9/10 sm:w-9/10 md:w-9/10">
          <div
            className="font-semibold text-sm sm:text-xl md:text-2xl text-gray-500">
            <TypeAnimation
              sequence={[
                "Empowering your online presence with digital marketing & future-proofing your team with AI-driven productivity.",
                1000,
                " ", // Small pause
                100,
              ]}
              repeat={Infinity}
            />
          </div>
        </div>
      </div>

      {/* Bouncing Animation Keyframes */}
      <style>
        {`
          @keyframes bounce {
            0%, 100% {
              transform: translateY(0);
            }
            50% {
              transform: translateY(-8px);
            }
          }
        `}
      </style>
    </div>
  );
};

export default MainText;
