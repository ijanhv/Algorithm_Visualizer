"use client";
import { getInsertionSortAnims } from "@/components/Algortithms/InsertionSort";
import { createContext, useEffect, useState } from "react";

const initVals: Settings = {
  algoType: "merge sort",
  arrayLength: 25,
  delay: 15,
};

interface AlgoContextProps {
  children: React.ReactNode;
}

export type AlgoType = "merge sort" | "insertion sort";

interface Settings {
  algoType: "merge sort" | "insertion sort";
  arrayLength: number;
  delay: number;
}

type SettingsContext = {
  settings: Settings;
  setSettings?: React.Dispatch<React.SetStateAction<Settings>>;
  sort: (algoType: AlgoType) => void;
};

type Items = {
  items: number[];
  setItems?: React.Dispatch<React.SetStateAction<number[]>>;
};
export const ItemsContext = createContext<Items>({ items: [] });

export const Context = createContext<SettingsContext>({
  settings: initVals,
  sort: (algoType) => {},
});

const AlgoContext: React.FC<AlgoContextProps> = ({ children }) => {
  const [settings, setSettings] = useState<Settings>(initVals);
  const [items, setItems] = useState<number[]>([]);

  useEffect(() => {
    const randomNumbers = [];
    for (let i = 0; i < settings.arrayLength; i++) {
      randomNumbers.push(Math.floor(Math.random() * 540));
    }
    setItems(randomNumbers);
    console.log(randomNumbers);
  }, [settings.arrayLength]);

  const sort = (algoType: AlgoType) => {
    switch (algoType) {
      case "merge sort":
        break;
      case "insertion sort":
        const { newArr, animArr } = getInsertionSortAnims(items);
        animateDivs(newArr, animArr);
        console.log(newArr, animArr);
        break;
      default:
        console.log("default");
        break;
    }
  };

  const animateDivs = (newArr: number[], arr: number[][]) => {
    arr.forEach(([first, second], idx) => {
      const div1 = document.getElementById(`${first}`);
      const div2 = document.getElementById(`${second}`);
      if (!div1 || !div2) return;

      setTimeout(() => {
        div1.style.backgroundColor = "#9C9CFC";
        div2.style.backgroundColor = "#9C9CFC";
        const divHeight = div1.style.height;
        div1.style.height = div2.style.height;
        div2.style.height = divHeight;
        setTimeout(() => {
          div1.style.backgroundColor = "teal";
          div2.style.backgroundColor = "teal";

          if (idx === arr.length - 1) {
            setTimeout(() => {
              setItems(newArr);
            }, settings.delay * 5);
          }
        }, settings.delay * 5);
      }, idx * settings.delay * 5);
    });
  };

  return (
    <ItemsContext.Provider value={{ items, setItems }}>
      <Context.Provider
        value={{
          sort,
          settings,
          setSettings,
        }}
      >
        {children}
      </Context.Provider>
    </ItemsContext.Provider>
  );
};

export default AlgoContext;
