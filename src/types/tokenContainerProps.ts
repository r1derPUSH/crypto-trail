export type TokenContainerProps = {
  image: string;
  symbol: string;
  current_price: number | null;
  price_change_percentage_24h: number | null;

  setIsOpen: (v: boolean) => void;
  setToken: (symbol: string) => void;
  setImage: (img: string) => void;
  setPrice: (price: number) => void;
};
