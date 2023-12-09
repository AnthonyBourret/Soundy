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

export type AvatarProps = {
  index: number;
  role: string | undefined;
  size: string;
  img: string;
  alt: string;
};
