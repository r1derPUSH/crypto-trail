export interface HistoryItemProps {
  from: string;
  to: string;
  id: number | string;
  time: string;
  fromPrice: number | string;
  toPrice: number | string;
  fromImage: string;
  toImage: string;
  inputValue: string | number;
  inputValueTo: string | number;
  onDelete: (id: string) => void;
}
