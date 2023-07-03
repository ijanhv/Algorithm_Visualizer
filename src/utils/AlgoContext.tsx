"use client";
import { createContext, useState } from "react";

interface Settings {
  algotype: "merge sort" | "insertion sort";
  arrayLength: number;
  delay: number;
}

interface AlgoContextProps {
  children: React.ReactNode;
}

const initVals: Settings = {
  algotype: "merge sort",
  arrayLength: 25,
  delay: 15,
};

type SettingsContext = {
  settings: Settings;
  setSettings: React.Dispatch<React.SetStateAction<Settings>>;
};

const Context = createContext<SettingsContext>({
  settings: initVals,
  setSettings: () => {},
});

const AlgoContext: React.FC<AlgoContextProps> = ({ children }) => {
  const [settings, setSettings] = useState<Settings>(initVals);

  return (
    <Context.Provider
      value={{
        settings,
        setSettings,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default AlgoContext;
