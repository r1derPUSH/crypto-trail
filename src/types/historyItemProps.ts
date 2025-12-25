export interface HistoryItemProps {
  id: string;
  from: string;
  to: string;
  time: string;
  inputValue: string;
  inputValueTo: string;
  fromImage: string;
  toImage: string;
  onRemove: (id: string) => void;
}
