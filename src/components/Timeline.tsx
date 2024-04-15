import { Timeline as TimelineType } from "@/types/type";
import React from "react";
import { Chrono } from "react-chrono";

const Timeline = ({ timeline }: { timeline: TimelineType[] }) => {
  return (
    <section className="w-full min-h-screen flex flex-col gap-4 items-center justify-center">
      <div className="heading text-4xl font-bold p-4">Timeline</div>
      <div className="scroll w-full overflow-x-scroll h-[70%] flex no-scrollbar">
        {timeline.map((item, i) => {
          return <div className="w-[300px] flex-shrink-0" key={i}>{item.company_name}</div>;
        })}
      </div>
      {/* <Chrono
        items={timeline.map((e) => {
          return {
            title: e.jobTitle,
            cardTitle: e.company_name,
            cardSubtitle: e.summary,
            cardDetailedText: e.bulletPoints.join(","),
          };
        })}
        className=""
        disableToolbar
      /> */}
    </section>
  );
};

export default Timeline;
