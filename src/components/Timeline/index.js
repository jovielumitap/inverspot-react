import React from "react";
import {TimelineItem} from "./TimelineItem";
export const Timeline = ({ timelineData }) =>
    timelineData.length > 0 && (
        <div className="timeline-container">
            {timelineData.map((data, idx) => (
                <TimelineItem data={data} key={idx}/>
            ))}
        </div>
    );
