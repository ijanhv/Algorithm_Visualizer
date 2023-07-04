"use client";
import { getBubbleSortAnims } from "@/components/Algortithms/BubbleSort";
import { getInsertionSortAnims } from "@/components/Algortithms/InsertionSort";
import { getMergeSortAnims } from "@/components/Algortithms/MergeSort";
import { getSelectionSortAnims } from "@/components/Algortithms/SelectionSort";
import { createContext, useEffect, useState } from "react";

const initVals: Settings = {
  algoType: "merge sort",
  arrayLength: 25,
  delay: 15,
};

interface AlgoContextProps {
  children: React.ReactNode;
}

export type AlgoType =
  | "merge sort"
  | "insertion sort"
  | "bubble sort"
  | "quick sort"
  | "heap sort"
  | "selection sort";

interface Settings {
  algoType:
    | "merge sort"
    | "insertion sort"
    | "bubble sort"
    | "quick sort"
    | "heap sort"
    | "selection sort";
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
        const aux: number[] = [];
        const arr: number[][] = [];
        const nums = [...items];
        getMergeSortAnims(nums, aux, arr, 0, items.length - 1);
        animateMerge(nums, arr);
        console.log("hi", nums);
        break;
      case "insertion sort":
        const { newArr, animArr } = getInsertionSortAnims(items);
        animateDivs(newArr, animArr);
        console.log(newArr, animArr);
        break;
      case "bubble sort":
        const { newArr: bubbleArr, animArr: bubbleAnimArr } =
          getBubbleSortAnims(items);
        animateBubble(bubbleArr, bubbleAnimArr);
        console.log(bubbleArr, bubbleAnimArr);
        break;
      case "selection sort":
        const { newArr: selectionArr, animArr: selectionAnimArr } =
          getSelectionSortAnims(items);
        animateDivs(selectionArr, selectionAnimArr);

        break;
      default:
        console.log("default");
        break;
    }
  };

  const animateBubble = (newArr: number[], arr: number[][]) => {
    // show bubblesort animations
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

  const animateMerge = (newArr: number[], arr: number[][]) => {
    arr.forEach(([newHeight, index], idx) => {
      const div = document.getElementById(`${index}`);
      if (!div) return;
      setTimeout(() => {
        div.style.backgroundColor = "#9C9CFC";
        div.style.height = `${newHeight / 7}%`;
        setTimeout(() => {
          div.style.backgroundColor = "teal";
          if (idx === arr.length - 1) {
            setItems(newArr);
          }
        }, settings.delay * 2);
      }, settings.delay * idx * 2);
    });
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
