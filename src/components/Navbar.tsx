"use client";
import { AlgoType, Context } from "@/utils/AlgoContext";
import React, { useContext } from "react";

const Navbar = () => {
  const { sort, settings, setSettings } = useContext(Context);
  const onArrayChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    if (!setSettings) return;
    setSettings((c) => ({ ...c, arrayLength: +e.target.value * 5 }));
    console.log(settings.arrayLength);
  };
  const onDelayChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    if (!setSettings) return;
    setSettings((c) => ({ ...c, delay: +e.target.value }));
    console.log(settings.delay);
  };

  const onAlgoChange = (
    type: AlgoType
  ) => {
    if (!setSettings) return;
    setSettings((c) => ({ ...c, algoType: type }));
    // console.log(settings.algoType);
  };

  return (
    <nav className="w-screen bg-slate-700 grid grid-flow-row shadow-lg">
      <div className="container flex items-center justify-center w-full p-4 space-x-5">
        <div className="space-x-3">
          <button
            onClick={() => onAlgoChange("merge sort")}
            className={`bg-teal-700 hover:bg-teal-600 hover:shadow-lg text-white rounded-full shadow-md py-2 px-3 transition-all active:scale-95
            ${
              settings.algoType === "merge sort"
                ? "border-2 border-teal-100 font-semibold"
                : ""
            }
            `}
          >
            Merge Sort
          </button>
          <button
            onClick={() => onAlgoChange("insertion sort")}
            className={`bg-teal-700 hover:bg-teal-600 hover:shadow-lg text-white rounded-full shadow-md py-2 px-3 transition-all active:scale-95
            ${
              settings.algoType === "insertion sort"
                ? "border-2 border-teal-100 font-semibold"
                : ""
            }
            `}
          >
            Insertion Sort
          </button>
          <button
            onClick={() => onAlgoChange("bubble sort")}
            className={`bg-teal-700 hover:bg-teal-600 hover:shadow-lg text-white rounded-full shadow-md py-2 px-3 transition-all active:scale-95
            ${
              settings.algoType === "bubble sort"
                ? "border-2 border-teal-100 font-semibold"
                : ""
            }
            `}
          >
            Bubble Sort
          </button>
          <button
            onClick={() => onAlgoChange("selection sort")}
            className={`bg-teal-700 hover:bg-teal-600 hover:shadow-lg text-white rounded-full shadow-md py-2 px-3 transition-all active:scale-95
            ${
              settings.algoType === "selection sort"
                ? "border-2 border-teal-100 font-semibold"
                : ""
            }
            `}
          >
            Selection Sort
          </button>
          <button
            onClick={() => onAlgoChange("quick sort")}
            className={`bg-teal-700 hover:bg-teal-600 hover:shadow-lg text-white rounded-full shadow-md py-2 px-3 transition-all active:scale-95
            ${
              settings.algoType === "quick sort"
                ? "border-2 border-teal-100 font-semibold"
                : ""
            }
            `}
          >
            Quick Sort
          </button>
        </div>
        <button 
        onClick={() => sort(settings.algoType)}
        className="border-b-2 border border-teal-700 text-white hover:border-teal-600 hover:shadow-lg  rounded-full shadow-md py-2 px-5 transition-all active:scale-95">
          Sort
        </button>
      </div>
      <div className="flex flex-col items-center w-full py-3">
        <label htmlFor="items_amount" className="text-white">
          Array Length: {settings.arrayLength}{" "}
        </label>
        <input
          type="range"
          name="items_amount"
          id="items_amount"
          className="w-full max-w-2xl"
          defaultValue={25}
       
          min={1}
          onChange={onArrayChange}
        />
        <label htmlFor="items_amount" className="text-white">Delay: {settings.delay}</label>
        <input
          type="range"
          name="delay"
          id="delay"
          className="w-full max-w-2xl"
          min={1}
          defaultValue={15}
          onChange={onDelayChange}
        />
      </div>
    </nav>
  );
};

export default Navbar;
