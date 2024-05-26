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
  id: number;
  title: string;
  cover: string;
  artist?: {
    name: string;
  };
  duration: number;
  songOnAlbum?: {
    song_id?: number;
    position?: number;
  };
};

export type CardAlbum = {
  id: string;
  title: string;
  artist: {
    name: string;
  };
  cover: string;
  release_year: string;
  artist: {
    name: string;
  };
  songs: [
    {
      id: string;
      title: string;
      duration: string;
      songOnAlbum: {
        position: number;
      };
    },
  ];
};

export type ChosenDisplay = 'songs' | 'albums';

export type SVGProps = {
  width?: string;
  height?: string;
  color?: string ;
};

export type ProfileJWT = {
  id: number,
  ip: string,
  iat: number,
  exp: number,
};

export interface AudioPlayerState {
  album: {
    /** If we listen to song outside of an album */
    albumId?: number;
    albumTitle: string | null;
    albumPicture: string | null;
    songIds: number[] | null;
    songPlaying: number | null;
  }
  isMuted: boolean;
  isPlaying: boolean;
  song: {
    /** Song is null if user enter to our app or refresh */
    songId: number | null;
    songTitle: string;
    songPicture: string;
    songDuration: string | null;
  }
  artistName: string | null;
  volume: number;
  time: number;
}
