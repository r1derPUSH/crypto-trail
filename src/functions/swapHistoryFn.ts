import type { SwapHistoryItem } from "../types/swapHistory";

const STORAGE_KEY = "swapHistory";

export function getSwapHistory(): SwapHistoryItem[] {
  const raw = localStorage.getItem(STORAGE_KEY);
  return raw ? JSON.parse(raw) : [];
}

export function addSwapToHistory(
  item: Omit<SwapHistoryItem, "id">,
): SwapHistoryItem[] {
  const history = getSwapHistory();

  const newItem: SwapHistoryItem = {
    id: crypto.randomUUID(),
    ...item,
  };

  const updated = [newItem, ...history];

  localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  return updated;
}

export function removeSwapFromHistory(id: string): SwapHistoryItem[] {
  const updated = getSwapHistory().filter((item) => item.id !== id);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  return updated;
}

export function clearSwapHistory(): SwapHistoryItem[] {
  localStorage.removeItem(STORAGE_KEY);
  return [];
}
