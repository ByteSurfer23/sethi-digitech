import React from "react";
function PortfolioItem({title,imgUrl,stack}){
    return(
        <div className="border-2 border-stone-900 rounded-md overflow-hidden dark:border-stone-100">
             <img src={`http://localhost:3000/uploads/${imgUrl.split("\\").pop()}`} alt="portfolio" className="w-full h-36 md:h-48 object-cover cursor-pointer"/>
             <div className="w-full p-4">
                <h3 className="text-lg md:text-xl mb-2 md:mb-3 font-semibold">{title}</h3>
                <p className="flex flex-wrap gap-2 flex-row items-center justify-start text-xs md:text-sm">{stack}</p>
             </div>
        </div>
    )
}
export default PortfolioItem;