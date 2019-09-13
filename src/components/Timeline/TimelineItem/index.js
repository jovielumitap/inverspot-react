import React from "react";

export const TimelineItem = ({data}) => (
    <div className="timeline-item">
        <div className="timeline-item-content">
            <div className="timeline-mask" />
            <span className="circle"/>
            <div className="timeline-title">{data.label}</div>
            <div className="timeline-description">{data.description? data.description: "no description"}</div>
        </div>
    </div>
);
