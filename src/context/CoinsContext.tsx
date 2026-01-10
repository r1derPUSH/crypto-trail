import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import type { Coin } from "../types/coin";

type CoinsContextType = {
  coins: Coin[];
};

const CoinsContext = createContext<CoinsContextType | undefined>(undefined);

export function CoinsProvider({ children }: { children: ReactNode }) {
  const [coins, setCoins] = useState<Coin[]>([]);

  useEffect(() => {
    let isMounted = true;

    async function fetchCoins() {
      try {
        const res = await fetch(
          "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd"
        );

        if (!res.ok) throw new Error("Fetch failed");

        const data: Coin[] = await res.json();
        if (isMounted) setCoins(data);
      } catch (err) {
        console.error("Coins fetch error:", err);
      }
    }

    fetchCoins();
    const interval = setInterval(fetchCoins, 35000);

    return () => {
      isMounted = false;
      clearInterval(interval);
    };
  }, []);

  return (
    <CoinsContext.Provider value={{ coins }}>{children}</CoinsContext.Provider>
  );
}

export function useCoins() {
  const ctx = useContext(CoinsContext);
  if (!ctx) {
    throw new Error("useCoins must be used inside CoinsProvider");
  }
  return ctx;
}
