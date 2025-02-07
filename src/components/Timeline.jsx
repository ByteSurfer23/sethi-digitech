import React from "react";
import TimelineItem from "./Timelineitem";
import Title from './Title';
function Timeline({data_array})
{
    const timeline = data_array;
    return(
    <div className="flex flex-col md:flex-row justify-center">
        <div className="my-20 w-full md:w-7/12">
            <Title>Timeline</Title>
            {timeline.map((item)=>(
            <TimelineItem 
            year={item[0]}
            title={item[1]}
            duration={item[2]}
            details={item[3]}
            />
        ))}
        </div>
    </div>
    )
}
export default Timeline;