"use client";
import AlgoContext, { Context, ItemsContext } from "@/utils/AlgoContext";
import React, { useContext } from "react";

const Bars = () => {
  const { items } = useContext(ItemsContext);
  const { settings } = useContext(Context);

  return (
    <section className="[grid-row:4/-1] sm:[grid-row:3/-1] ">
      <div className="flex w-full h-full items-end overflow-hidden top-0 gap-[0.2rem]">
        {items.map((item, idx) => (
          <div
            key={`${item}-${settings.arrayLength}-${idx}`}
            className="flex-1 rounded-t-md"
            style={{
              backgroundColor: "teal",
              height: `${item / 15}rem`,
            }}
            id={`${idx}`}
          ></div>
        ))}
      </div>
    </section>
  );
};


export default Bars;
