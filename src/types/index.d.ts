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
  onClick?: () => void;
};

export type AvatarProps = {
  index: number;
  role: string | undefined;
  size: string;
  img: string;
  alt: string;
};

export type Song = {
  id: string;
  title: string;
  cover: string;
  artist: {
    name: string;
  };
};

export type LoginInput = {
  email: String
  password: String
};

export type AllSongs = {
  songs: CardSong[]
};

export type CardSong = {
  id: string;
  title: string;
  cover: string;
  artist: {
    name: string;
  };
  duration: string;
};

export type CardAlbum = {
  id: string;
  title: string;
  cover: string;
  release_year: string;
  songs: [
    {
      id: string;
      title: string;
      duration: string;
    },
  ];
};

export type ChosenDisplay = 'songs' | 'albums';

export type SVGProps = {
  width: string;
  height: string;
  color?: string ;
};
