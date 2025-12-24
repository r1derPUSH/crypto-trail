export type SwapHistoryItem = {
  id: string;
  from: string;
  to: string;
  time: string;
  fromPrice?: number;
  toPrice?: number;
  inputValue?: number | string;
  inputValueTo?: number | string;
  fromImage?: string;
  toImage?: string;
};
