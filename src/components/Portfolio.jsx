import React from "react";
import portfolio from "../data/portfolio";
import PortfolioItem from "./Portfolioitem";
import Title from "./Title";

function Portfolio({image_data}){
    let portfolio = image_data; 
    console.log(image_data);
    return(
        <>
        <Title>Projects</Title>

        <div className="flex flex-col md:flex-row items-ceter justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                   {portfolio.map((project) => (
          <PortfolioItem
            key={project.id} 
            imgUrl={project.url}
            title={project.title}
            stack={project.description}
          />
        ))}
            </div>
        </div>
        </>
    )
}
export default Portfolio;