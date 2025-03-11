import { useEffect, useState } from "react";

const steps = [
  "Defining the Objective 🎯 - Set clear goals to create a roadmap for measurable success.",
  "Understanding Your Target Group 👥 - Dive deep into customer insights for targeted connections.",
  "Competitor Analysis 🔍 - Analyze competitors to position your brand ahead.",
  "Defining KPIs for Tracking 📊 - Set measurable KPIs to ensure strategy effectiveness.",
  "Executing the Plan 🚀 - Implement targeted campaigns with engaging visuals and content",
  "Analyzing, Adjusting & Reporting 🔄 - Monitor performance, refine strategies, and maintain transparent reporting."
];

export default function ScrollingSteps() {
  const [visibleIndex, setVisibleIndex] = useState(-1);

  useEffect(() => {
    const handleScroll = () => {
      const stepElements = document.querySelectorAll(".step");
      stepElements.forEach((el, index) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.75) {
          setVisibleIndex((prev) => (prev < index ? index : prev));
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="w-full min-h-screen bg-transparent text-[#D3D3D3] flex justify-center items-center flex-col py-20 space-y-16">
      <h2 className="text-4xl sm:text-6xl font-bold text-white text-center w-full max-w-3xl mb-12">Our Process</h2>
      <div className="relative w-3/4 flex flex-col items-center space-y-6">
        {steps.map((step, index) => (
          <div 
            key={index} 
            className={`relative flex w-full transition-all duration-700 ease-out opacity-0 transform step group ${
              visibleIndex >= index ? "opacity-100 translate-x-0" : index % 2 === 0 ? "-translate-x-24" : "translate-x-24"
            } items-center ${index % 2 === 0 ? "justify-start" : "justify-end"} hover:scale-105 `}
          >
            <div 
              className="w-6 h-6 rounded-full border-4 border-gray-600 bg-gray-900 transition-all duration-500 group-hover:border-blue-300 group-hover:bg-blue-300" 
              style={{ position: "relative", top: "50%", transform: "translateY(-50%)" }}
            ></div>
            <div className="bg-white/10 backdrop-blur-xl p-6 rounded-lg shadow-lg w-3/4 transition-transform duration-500 border border-white/20 ml-6 group-hover:shadow-xl">
              <div className="text-blue-300 font-bold text-sm">STEP {index + 1}</div>
              <div className="text-xl font-semibold mt-2">{step}</div>
              <p className="text-[#D3D3D3] mt-2 hidden sm:block">This stage focuses on ensuring a smooth workflow.</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
