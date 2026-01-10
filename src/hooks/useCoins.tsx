import { useEffect, useState } from "react";
import type { Coin } from "../types/coin";

export function useCoins() {
  const [coins, setCoins] = useState<Coin[]>([]);

  async function getData() {
    try {
      const res = await fetch(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd"
      );
      const response: Coin[] = await res.json();
      setCoins(response);
    } catch (err) {
      console.error(`ERROR: ${err}`);
    }
  }

  useEffect(() => {
    getData();
    const interval = setInterval(getData, 35000);
    return () => clearInterval(interval);
  }, []);

  return { coins };
}
