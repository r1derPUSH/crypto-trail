export type LoginSectionProps = {
  isRegistered: boolean;
  setIsRegistered: React.Dispatch<React.SetStateAction<boolean>>;

  setLogin: React.Dispatch<React.SetStateAction<string>>;
  setPassword: React.Dispatch<React.SetStateAction<string>>;

  userAvatar: string | null;
  registerDate: string | null;

  login: string | null;

  setUserAvatar: React.Dispatch<React.SetStateAction<string | null>>;
  setRegisterDate: React.Dispatch<React.SetStateAction<string | null>>;
};
