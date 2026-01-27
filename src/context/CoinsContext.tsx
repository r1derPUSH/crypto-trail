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
        const cached = localStorage.getItem("coins_cache");
        const cachedTime = localStorage.getItem("coins_cache_time");

        if (cached && cachedTime && Date.now() - Number(cachedTime) < 60000) {
          setCoins(JSON.parse(cached));
          return;
        }

        const res = await fetch(
          "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd",
        );

        if (!res.ok) throw new Error("Fetch failed");

        const data: Coin[] = await res.json();

        if (!isMounted) return;

        const filtered = data.filter((coin) => coin.symbol.length <= 5);

        setCoins(filtered);
        localStorage.setItem("coins_cache", JSON.stringify(filtered));
        localStorage.setItem("coins_cache_time", Date.now().toString());
      } catch (err) {
        console.error("Coins fetch error:", err);

        const cached = localStorage.getItem("coins_cache");
        if (cached) {
          setCoins(JSON.parse(cached));
        }
      }
    }

    fetchCoins();
    const interval = setInterval(fetchCoins, 15000);

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
