// ["name"]: tokentName,
//       ["buyPrice"]: currentPrice,
//       ["targetPrice"]: targetPrice,
//       ["targetPriceInPercents"]: targetPriceInPercents,
//       ["targetProfit"]: profit,
//       ["totalValue"]: totalValue,

export type Invest = {
  name: string;
  price: number | string;
  targetPrice: number | string;
  targetPriceInPercents: number | string;
  targetProfit: string | number;
  totalValue: string | number;
};
