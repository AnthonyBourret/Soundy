export type ServiceCard = {
  icon?: React.JSX.Element;
  title: string;
  text: string;
  buttonText: string;
  link: string;
};

export type MenuButton = {
  text: string;
  link: string;
};

export type LanguageSelectorProps = {
  text: string;
  firstLanguagge: string;
  secondLanguage: string;
  handleClickFr: () => void;
  handleClickEn: () => void;
};

export type CustomMenuButtonProps = {
  link: string;
  title: string;
  buttonStyle: (string) => string;
};

export type OpenModalButtonProps = {
  buttonStyle: string;
  title: string;
  modalId: string;
};
