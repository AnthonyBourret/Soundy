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

export type Song = {
  id: string;
  title: string;
  cover: string;
  artist: {
    name: string;
  };
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
  artist: {
    name: string;
  };
  release_year: string;
  songs: {
    id: string;
    title: string;
    duration: string;
  };
};
