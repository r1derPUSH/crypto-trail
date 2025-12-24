import type { SwapHistoryItem } from "../types/swapHistory";

const STORAGE_KEY = "swapHistory";

export function getSwapHistory(): SwapHistoryItem[] {
  const raw = localStorage.getItem(STORAGE_KEY);
  return raw ? JSON.parse(raw) : [];
}

export function addSwapToHistory(item: Omit<SwapHistoryItem, "id">) {
  const history = getSwapHistory();

  const newItem: SwapHistoryItem = {
    id: crypto.randomUUID(),
    ...item,
  };

  history.unshift(newItem);

  localStorage.setItem(STORAGE_KEY, JSON.stringify(history));
}

export function removeSwapFromHistory(id: string) {
  const history = getSwapHistory().filter((item) => item.id !== id);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(history));
}

export function clearSwapHistory() {
  localStorage.removeItem(STORAGE_KEY);
}
