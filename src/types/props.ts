export type InvestItem = {
  id: number;
  name: string;
  investedValue: number;
  tokenAmount: number;
  buyPrice: number;
  targetPrice: number;
  targetPriceInPercents: number;
  tokenImage: string;
  openedAt?: number;
};

export type InvestHistoryItem = {
  id: number;
  name: string;
  investedValue: number;
  closedValue: number;
  profit: number;
  percent: number;
  img?: string;
  openedAt: number | null;
  closedAt: number;
  status: "profit" | "loss";
};

export type Props = {
  invests: InvestItem[];
  setInvests: React.Dispatch<React.SetStateAction<InvestItem[]>>;
  setTotalPnL: React.Dispatch<React.SetStateAction<number>>;
};
