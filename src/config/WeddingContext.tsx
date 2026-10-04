import React, { createContext, useContext, useEffect, useState } from "react";
import { getActiveWeddingData, WeddingSide } from "@/weddingData";

type WeddingDataContextType = ReturnType<typeof getActiveWeddingData>;

const WeddingContext = createContext<WeddingDataContextType | null>(null);

export function WeddingProvider({ children }: { children: React.ReactNode }) {
  const [data, setData] = useState(() => getActiveWeddingData());

  useEffect(() => {
    // Re-check on mount or url changes
    setData(getActiveWeddingData());

    const handlePopState = () => {
      setData(getActiveWeddingData());
    };
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  return (
    <WeddingContext.Provider value={data}>
      {children}
    </WeddingContext.Provider>
  );
}

export function useWedding() {
  const ctx = useContext(WeddingContext);
  if (!ctx) {
    // Fallback if rendered outside provider
    return getActiveWeddingData();
  }
  return ctx;
}
