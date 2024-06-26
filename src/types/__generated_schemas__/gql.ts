/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n  mutation CreateAlbum($input: AlbumCreateInput!) {\n    addAlbum(input: $input) {\n        id\n        title\n        cover\n        release_year\n        songs {\n            id\n        }\n    }\n    }\n": types.CreateAlbumDocument,
    "\n  mutation CreateArtist($input: ArtistCreateInput!) {\n    addArtist(input: $input) {\n      country\n      id\n      name\n      picture\n    }\n  }\n": types.CreateArtistDocument,
    "\n  mutation CreateSong($input: SongCreateInput!) {\n    addSong(input: $input) {\n      id\n      title\n      cover\n      duration\n      release_year\n      lyrics\n    }\n  }\n": types.CreateSongDocument,
    "\n  mutation DeleteAlbum($albumId: Int!) {\n    deleteAlbum(id: $albumId)\n  }\n": types.DeleteAlbumDocument,
    "\n  mutation DeleteArtist {\n    deleteArtist\n  }\n": types.DeleteArtistDocument,
    "\n  mutation DeleteSongs($songIds: [Int!]!) {\n    deleteSongs(ids: $songIds)\n  }\n": types.DeleteSongsDocument,
    "\n  mutation LikeSong($songId: Int!) {\n    likeSong(id: $songId)\n  }\n": types.LikeSongDocument,
    "\n  mutation UnlikeSong($songId: Int!) {\n    unlikeSong(id: $songId)\n  }\n": types.UnlikeSongDocument,
    "\n  mutation UpdateAlbum(\n    $albumId: Int!,\n    $input: AlbumUpdateInput!\n  ) {\n    updateAlbum(\n      albumId: $albumId,\n      input: $input\n    ) {\n      title\n      cover\n      release_year\n    }\n  }\n": types.UpdateAlbumDocument,
    "\n  mutation UpdateProfile($input: ArtistUpdateInput!) {\n    updateArtist(input: $input) {\n      email\n      country\n      name\n      picture\n    }\n  }\n": types.UpdateProfileDocument,
    "\n  mutation UpdateSong(\n    $songId: Int!,\n    $input: SongUpdateInput!\n  ) {\n    updateSong(\n      songId: $songId,\n      input: $input\n    ) {\n      title\n      cover\n      release_year\n    }\n  }\n": types.UpdateSongDocument,
    "\n    query FavoriteSongsQuery {\n        songs(filter: { liked: true }) {\n            cover\n            duration\n            id\n            lyrics\n            title\n            isLiked\n            release_year\n            artist {\n                name\n            }\n        }\n    }\n": types.FavoriteSongsQueryDocument,
    "\n  query ListenPageAlbumsQuery($limit: Int) {\n    albums(limit: $limit){\n      id\n      title\n      artist {\n        name\n      }\n      cover\n      release_year\n      songs {\n        id\n        title\n        duration\n      }\n    }\n  }\n": types.ListenPageAlbumsQueryDocument,
    "\n  query ListenPageSongsQuery($limit: Int, $offset: Int) {\n    songs(limit: $limit, offset: $offset) {\n      id\n      title\n      artist {\n        name\n      }\n      cover\n      duration\n      release_year\n      isLiked\n    }\n  }\n": types.ListenPageSongsQueryDocument,
    "\n  query Login($input: LoginInput!) {\n    login(input: $input) {\n      expire_at\n      token\n    }\n  }\n": types.LoginDocument,
    "\n  query OneSongPlayerQuery($songId: Int!) {\n    song(id: $songId) {\n      title\n      duration\n    }\n  }\n": types.OneSongPlayerQueryDocument,
    "\n  query ProfileAlbums($filter: AlbumFilterInput) {\n    albums(filter: $filter){\n      id\n      title\n      artist {\n        name\n      }\n      cover\n      release_year\n      songs {\n        id\n        title\n        duration\n      }\n    }\n  }\n": types.ProfileAlbumsDocument,
    "\n  query Profile {\n    profile {\n      country\n      email\n      name\n      picture\n    }\n  }\n": types.ProfileDocument,
    "\n  query ProfileSongs($filter: SongFilterInput) {\n    songs(filter: $filter) {\n      id\n      title\n      artist {\n        name\n      }\n      cover\n      duration\n      release_year\n      isLiked\n    }\n  }\n": types.ProfileSongsDocument,
    "\n  query SearchAlbumsQuery($limit: Int, $filter: AlbumFilterInput) {\n    albums(limit: $limit, filter: $filter) {\n      id\n      title\n      artist {\n          name\n      }\n      cover\n      release_year\n      songs {\n          id\n          title\n          duration\n      }\n    }\n  }\n": types.SearchAlbumsQueryDocument,
    "\n  query SearchSongsQuery($limit: Int, $filter: SongFilterInput) {\n    songs(limit: $limit, filter: $filter) {\n      id\n      title\n      artist {\n        name\n      }\n      cover\n      duration\n      release_year\n      isLiked\n    }\n  }\n": types.SearchSongsQueryDocument,
    "\n  query SongOverview {\n    songs(limit: 5) {\n      id\n      cover\n      title\n      duration\n      artist {\n        name\n      }\n    }\n  }\n": types.SongOverviewDocument,
    "\n  query UserSongsQuery($createdByUser: Boolean!) {\n    songs(filter: { createdByUser: $createdByUser}) {\n      id\n      title\n      cover\n      duration\n    }\n  }\n": types.UserSongsQueryDocument,
};

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function gql(source: string): unknown;

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation CreateAlbum($input: AlbumCreateInput!) {\n    addAlbum(input: $input) {\n        id\n        title\n        cover\n        release_year\n        songs {\n            id\n        }\n    }\n    }\n"): (typeof documents)["\n  mutation CreateAlbum($input: AlbumCreateInput!) {\n    addAlbum(input: $input) {\n        id\n        title\n        cover\n        release_year\n        songs {\n            id\n        }\n    }\n    }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation CreateArtist($input: ArtistCreateInput!) {\n    addArtist(input: $input) {\n      country\n      id\n      name\n      picture\n    }\n  }\n"): (typeof documents)["\n  mutation CreateArtist($input: ArtistCreateInput!) {\n    addArtist(input: $input) {\n      country\n      id\n      name\n      picture\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation CreateSong($input: SongCreateInput!) {\n    addSong(input: $input) {\n      id\n      title\n      cover\n      duration\n      release_year\n      lyrics\n    }\n  }\n"): (typeof documents)["\n  mutation CreateSong($input: SongCreateInput!) {\n    addSong(input: $input) {\n      id\n      title\n      cover\n      duration\n      release_year\n      lyrics\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation DeleteAlbum($albumId: Int!) {\n    deleteAlbum(id: $albumId)\n  }\n"): (typeof documents)["\n  mutation DeleteAlbum($albumId: Int!) {\n    deleteAlbum(id: $albumId)\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation DeleteArtist {\n    deleteArtist\n  }\n"): (typeof documents)["\n  mutation DeleteArtist {\n    deleteArtist\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation DeleteSongs($songIds: [Int!]!) {\n    deleteSongs(ids: $songIds)\n  }\n"): (typeof documents)["\n  mutation DeleteSongs($songIds: [Int!]!) {\n    deleteSongs(ids: $songIds)\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation LikeSong($songId: Int!) {\n    likeSong(id: $songId)\n  }\n"): (typeof documents)["\n  mutation LikeSong($songId: Int!) {\n    likeSong(id: $songId)\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation UnlikeSong($songId: Int!) {\n    unlikeSong(id: $songId)\n  }\n"): (typeof documents)["\n  mutation UnlikeSong($songId: Int!) {\n    unlikeSong(id: $songId)\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation UpdateAlbum(\n    $albumId: Int!,\n    $input: AlbumUpdateInput!\n  ) {\n    updateAlbum(\n      albumId: $albumId,\n      input: $input\n    ) {\n      title\n      cover\n      release_year\n    }\n  }\n"): (typeof documents)["\n  mutation UpdateAlbum(\n    $albumId: Int!,\n    $input: AlbumUpdateInput!\n  ) {\n    updateAlbum(\n      albumId: $albumId,\n      input: $input\n    ) {\n      title\n      cover\n      release_year\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation UpdateProfile($input: ArtistUpdateInput!) {\n    updateArtist(input: $input) {\n      email\n      country\n      name\n      picture\n    }\n  }\n"): (typeof documents)["\n  mutation UpdateProfile($input: ArtistUpdateInput!) {\n    updateArtist(input: $input) {\n      email\n      country\n      name\n      picture\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation UpdateSong(\n    $songId: Int!,\n    $input: SongUpdateInput!\n  ) {\n    updateSong(\n      songId: $songId,\n      input: $input\n    ) {\n      title\n      cover\n      release_year\n    }\n  }\n"): (typeof documents)["\n  mutation UpdateSong(\n    $songId: Int!,\n    $input: SongUpdateInput!\n  ) {\n    updateSong(\n      songId: $songId,\n      input: $input\n    ) {\n      title\n      cover\n      release_year\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    query FavoriteSongsQuery {\n        songs(filter: { liked: true }) {\n            cover\n            duration\n            id\n            lyrics\n            title\n            isLiked\n            release_year\n            artist {\n                name\n            }\n        }\n    }\n"): (typeof documents)["\n    query FavoriteSongsQuery {\n        songs(filter: { liked: true }) {\n            cover\n            duration\n            id\n            lyrics\n            title\n            isLiked\n            release_year\n            artist {\n                name\n            }\n        }\n    }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query ListenPageAlbumsQuery($limit: Int) {\n    albums(limit: $limit){\n      id\n      title\n      artist {\n        name\n      }\n      cover\n      release_year\n      songs {\n        id\n        title\n        duration\n      }\n    }\n  }\n"): (typeof documents)["\n  query ListenPageAlbumsQuery($limit: Int) {\n    albums(limit: $limit){\n      id\n      title\n      artist {\n        name\n      }\n      cover\n      release_year\n      songs {\n        id\n        title\n        duration\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query ListenPageSongsQuery($limit: Int, $offset: Int) {\n    songs(limit: $limit, offset: $offset) {\n      id\n      title\n      artist {\n        name\n      }\n      cover\n      duration\n      release_year\n      isLiked\n    }\n  }\n"): (typeof documents)["\n  query ListenPageSongsQuery($limit: Int, $offset: Int) {\n    songs(limit: $limit, offset: $offset) {\n      id\n      title\n      artist {\n        name\n      }\n      cover\n      duration\n      release_year\n      isLiked\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query Login($input: LoginInput!) {\n    login(input: $input) {\n      expire_at\n      token\n    }\n  }\n"): (typeof documents)["\n  query Login($input: LoginInput!) {\n    login(input: $input) {\n      expire_at\n      token\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query OneSongPlayerQuery($songId: Int!) {\n    song(id: $songId) {\n      title\n      duration\n    }\n  }\n"): (typeof documents)["\n  query OneSongPlayerQuery($songId: Int!) {\n    song(id: $songId) {\n      title\n      duration\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query ProfileAlbums($filter: AlbumFilterInput) {\n    albums(filter: $filter){\n      id\n      title\n      artist {\n        name\n      }\n      cover\n      release_year\n      songs {\n        id\n        title\n        duration\n      }\n    }\n  }\n"): (typeof documents)["\n  query ProfileAlbums($filter: AlbumFilterInput) {\n    albums(filter: $filter){\n      id\n      title\n      artist {\n        name\n      }\n      cover\n      release_year\n      songs {\n        id\n        title\n        duration\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query Profile {\n    profile {\n      country\n      email\n      name\n      picture\n    }\n  }\n"): (typeof documents)["\n  query Profile {\n    profile {\n      country\n      email\n      name\n      picture\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query ProfileSongs($filter: SongFilterInput) {\n    songs(filter: $filter) {\n      id\n      title\n      artist {\n        name\n      }\n      cover\n      duration\n      release_year\n      isLiked\n    }\n  }\n"): (typeof documents)["\n  query ProfileSongs($filter: SongFilterInput) {\n    songs(filter: $filter) {\n      id\n      title\n      artist {\n        name\n      }\n      cover\n      duration\n      release_year\n      isLiked\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query SearchAlbumsQuery($limit: Int, $filter: AlbumFilterInput) {\n    albums(limit: $limit, filter: $filter) {\n      id\n      title\n      artist {\n          name\n      }\n      cover\n      release_year\n      songs {\n          id\n          title\n          duration\n      }\n    }\n  }\n"): (typeof documents)["\n  query SearchAlbumsQuery($limit: Int, $filter: AlbumFilterInput) {\n    albums(limit: $limit, filter: $filter) {\n      id\n      title\n      artist {\n          name\n      }\n      cover\n      release_year\n      songs {\n          id\n          title\n          duration\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query SearchSongsQuery($limit: Int, $filter: SongFilterInput) {\n    songs(limit: $limit, filter: $filter) {\n      id\n      title\n      artist {\n        name\n      }\n      cover\n      duration\n      release_year\n      isLiked\n    }\n  }\n"): (typeof documents)["\n  query SearchSongsQuery($limit: Int, $filter: SongFilterInput) {\n    songs(limit: $limit, filter: $filter) {\n      id\n      title\n      artist {\n        name\n      }\n      cover\n      duration\n      release_year\n      isLiked\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query SongOverview {\n    songs(limit: 5) {\n      id\n      cover\n      title\n      duration\n      artist {\n        name\n      }\n    }\n  }\n"): (typeof documents)["\n  query SongOverview {\n    songs(limit: 5) {\n      id\n      cover\n      title\n      duration\n      artist {\n        name\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query UserSongsQuery($createdByUser: Boolean!) {\n    songs(filter: { createdByUser: $createdByUser}) {\n      id\n      title\n      cover\n      duration\n    }\n  }\n"): (typeof documents)["\n  query UserSongsQuery($createdByUser: Boolean!) {\n    songs(filter: { createdByUser: $createdByUser}) {\n      id\n      title\n      cover\n      duration\n    }\n  }\n"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;