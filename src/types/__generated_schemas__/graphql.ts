/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Album = {
  __typename?: 'Album';
  artist?: Maybe<Artist>;
  artist_id?: Maybe<Scalars['Int']['output']>;
  cover?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  release_year?: Maybe<Scalars['Int']['output']>;
  songs?: Maybe<Array<Maybe<Song>>>;
  title: Scalars['String']['output'];
};

export type AlbumCreateInput = {
  cover?: InputMaybe<Scalars['String']['input']>;
  release_year?: InputMaybe<Scalars['Int']['input']>;
  songIds: Array<Scalars['Int']['input']>;
  title: Scalars['String']['input'];
};

export type AlbumFilterInput = {
  createdByUser?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  release_year?: InputMaybe<ReleaseYear>;
};

export type AlbumUpdateInput = {
  cover?: InputMaybe<Scalars['String']['input']>;
  release_year?: InputMaybe<Scalars['Int']['input']>;
  songIds?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type Artist = {
  __typename?: 'Artist';
  albums?: Maybe<Array<Maybe<Album>>>;
  country?: Maybe<Scalars['String']['output']>;
  favorites?: Maybe<Array<Maybe<ArtistLikeSong>>>;
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  picture?: Maybe<Scalars['String']['output']>;
  songs?: Maybe<Array<Maybe<Song>>>;
};

export type ArtistCreateInput = {
  country?: InputMaybe<Scalars['String']['input']>;
  email: Scalars['String']['input'];
  name: Scalars['String']['input'];
  password: Scalars['String']['input'];
  picture?: InputMaybe<Scalars['String']['input']>;
};

export type ArtistFilterInput = {
  name?: InputMaybe<Scalars['String']['input']>;
};

export type ArtistLikeSong = {
  __typename?: 'ArtistLikeSong';
  artist_id: Scalars['Int']['output'];
  song_id: Scalars['Int']['output'];
};

export type ArtistUpdateInput = {
  country?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  picture?: InputMaybe<Scalars['String']['input']>;
};

export type ArtistUser = {
  __typename?: 'ArtistUser';
  albums?: Maybe<Array<Maybe<Album>>>;
  country?: Maybe<Scalars['String']['output']>;
  email: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  password: Scalars['String']['output'];
  picture?: Maybe<Scalars['String']['output']>;
};

export enum DurationRange {
  MoreThanFiveMinutes = 'MORE_THAN_FIVE_MINUTES',
  OneMinute = 'ONE_MINUTE',
  OneToThreeMinutes = 'ONE_TO_THREE_MINUTES',
  ThreeToFiveMinutes = 'THREE_TO_FIVE_MINUTES'
}

export type Jwt = {
  __typename?: 'JWT';
  expire_at?: Maybe<Scalars['String']['output']>;
  token?: Maybe<Scalars['String']['output']>;
};

export type LoginInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type Mutation = {
  __typename?: 'Mutation';
  addAlbum?: Maybe<Album>;
  addArtist?: Maybe<Artist>;
  addSong?: Maybe<Song>;
  deleteAlbum?: Maybe<Scalars['Boolean']['output']>;
  deleteArtist?: Maybe<Scalars['Boolean']['output']>;
  deleteSongs?: Maybe<Scalars['Boolean']['output']>;
  likeSong?: Maybe<Scalars['Boolean']['output']>;
  unlikeSong?: Maybe<Scalars['Boolean']['output']>;
  updateAlbum?: Maybe<Album>;
  updateArtist?: Maybe<Artist>;
  updateSong?: Maybe<Song>;
};


export type MutationAddAlbumArgs = {
  input: AlbumCreateInput;
};


export type MutationAddArtistArgs = {
  input: ArtistCreateInput;
};


export type MutationAddSongArgs = {
  input: SongCreateInput;
};


export type MutationDeleteAlbumArgs = {
  id: Scalars['Int']['input'];
};


export type MutationDeleteSongsArgs = {
  ids: Array<Scalars['Int']['input']>;
};


export type MutationLikeSongArgs = {
  id: Scalars['Int']['input'];
};


export type MutationUnlikeSongArgs = {
  id: Scalars['Int']['input'];
};


export type MutationUpdateAlbumArgs = {
  albumArtistId: Scalars['Int']['input'];
  albumId: Scalars['Int']['input'];
  input: AlbumUpdateInput;
};


export type MutationUpdateArtistArgs = {
  input: ArtistUpdateInput;
};


export type MutationUpdateSongArgs = {
  input: SongUpdateInput;
  songId: Scalars['Int']['input'];
};

export type Query = {
  __typename?: 'Query';
  album?: Maybe<Album>;
  albums?: Maybe<Array<Maybe<Album>>>;
  artist?: Maybe<Artist>;
  artists?: Maybe<Array<Maybe<Artist>>>;
  login?: Maybe<Jwt>;
  profile?: Maybe<ArtistUser>;
  song?: Maybe<Song>;
  songs?: Maybe<Array<Maybe<Song>>>;
};


export type QueryAlbumArgs = {
  id: Scalars['Int']['input'];
};


export type QueryAlbumsArgs = {
  filter?: InputMaybe<AlbumFilterInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryArtistArgs = {
  id: Scalars['Int']['input'];
};


export type QueryArtistsArgs = {
  filter?: InputMaybe<ArtistFilterInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryLoginArgs = {
  input: LoginInput;
};


export type QuerySongArgs = {
  id: Scalars['Int']['input'];
};


export type QuerySongsArgs = {
  filter?: InputMaybe<SongFilterInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
};

export enum ReleaseYear {
  Year_70 = 'YEAR_70',
  Year_80 = 'YEAR_80',
  Year_90 = 'YEAR_90',
  Year_2000 = 'YEAR_2000',
  Year_2010 = 'YEAR_2010'
}

export type Song = {
  __typename?: 'Song';
  artist?: Maybe<Artist>;
  artist_id?: Maybe<Scalars['Int']['output']>;
  cover?: Maybe<Scalars['String']['output']>;
  /** Duration in second */
  duration: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  isLiked?: Maybe<Scalars['Boolean']['output']>;
  like?: Maybe<Array<Maybe<ArtistLikeSong>>>;
  lyrics?: Maybe<Scalars['String']['output']>;
  nbLike?: Maybe<Scalars['Int']['output']>;
  release_year?: Maybe<Scalars['Int']['output']>;
  songOnAlbum?: Maybe<Array<Maybe<SongOnAlbum>>>;
  title: Scalars['String']['output'];
};

export type SongCreateInput = {
  artist_id?: InputMaybe<Scalars['Int']['input']>;
  cover?: InputMaybe<Scalars['String']['input']>;
  duration: Scalars['Int']['input'];
  lyrics?: InputMaybe<Scalars['String']['input']>;
  release_year?: InputMaybe<Scalars['Int']['input']>;
  title: Scalars['String']['input'];
};

export type SongFilterInput = {
  createdByUser?: InputMaybe<Scalars['Boolean']['input']>;
  duration_filter?: InputMaybe<DurationRange>;
  liked?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type SongOnAlbum = {
  __typename?: 'SongOnAlbum';
  album_id: Scalars['Int']['output'];
  position: Scalars['Int']['output'];
  song_id: Scalars['Int']['output'];
};

export type SongUpdateInput = {
  cover?: InputMaybe<Scalars['String']['input']>;
  duration?: InputMaybe<Scalars['Int']['input']>;
  lyrics?: InputMaybe<Scalars['String']['input']>;
  release_year?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type CreateArtistMutationVariables = Exact<{
  input: ArtistCreateInput;
}>;


export type CreateArtistMutation = { __typename?: 'Mutation', addArtist?: { __typename?: 'Artist', country?: string | null, id: number, name: string, picture?: string | null } | null };

export type DeleteArtistMutationVariables = Exact<{ [key: string]: never; }>;


export type DeleteArtistMutation = { __typename?: 'Mutation', deleteArtist?: boolean | null };

export type DeleteSongsMutationVariables = Exact<{
  songIds: Array<Scalars['Int']['input']> | Scalars['Int']['input'];
}>;


export type DeleteSongsMutation = { __typename?: 'Mutation', deleteSongs?: boolean | null };

export type LikeSongMutationVariables = Exact<{
  songId: Scalars['Int']['input'];
}>;


export type LikeSongMutation = { __typename?: 'Mutation', likeSong?: boolean | null };

export type UnlikeSongMutationVariables = Exact<{
  songId: Scalars['Int']['input'];
}>;


export type UnlikeSongMutation = { __typename?: 'Mutation', unlikeSong?: boolean | null };

export type FavoriteSongsQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type FavoriteSongsQueryQuery = { __typename?: 'Query', songs?: Array<{ __typename?: 'Song', cover?: string | null, duration: number, id: number, lyrics?: string | null, title: string, isLiked?: boolean | null, release_year?: number | null, artist?: { __typename?: 'Artist', name: string } | null } | null> | null };

export type ListenPageAlbumsQueryQueryVariables = Exact<{
  limit?: InputMaybe<Scalars['Int']['input']>;
}>;


export type ListenPageAlbumsQueryQuery = { __typename?: 'Query', albums?: Array<{ __typename?: 'Album', id: number, title: string, cover?: string | null, release_year?: number | null, artist?: { __typename?: 'Artist', name: string } | null, songs?: Array<{ __typename?: 'Song', id: number, title: string, duration: number } | null> | null } | null> | null };

export type ListenPageSongsQueryQueryVariables = Exact<{
  limit?: InputMaybe<Scalars['Int']['input']>;
}>;


export type ListenPageSongsQueryQuery = { __typename?: 'Query', songs?: Array<{ __typename?: 'Song', id: number, title: string, cover?: string | null, duration: number, release_year?: number | null, isLiked?: boolean | null, artist?: { __typename?: 'Artist', name: string } | null } | null> | null };

export type LoginQueryVariables = Exact<{
  input: LoginInput;
}>;


export type LoginQuery = { __typename?: 'Query', login?: { __typename?: 'JWT', expire_at?: string | null, token?: string | null } | null };

export type ProfileAlbumsQueryVariables = Exact<{
  filter?: InputMaybe<AlbumFilterInput>;
}>;


export type ProfileAlbumsQuery = { __typename?: 'Query', albums?: Array<{ __typename?: 'Album', id: number, title: string, cover?: string | null, release_year?: number | null, artist?: { __typename?: 'Artist', name: string } | null, songs?: Array<{ __typename?: 'Song', id: number, title: string, duration: number } | null> | null } | null> | null };

export type ProfileQueryVariables = Exact<{ [key: string]: never; }>;


export type ProfileQuery = { __typename?: 'Query', profile?: { __typename?: 'ArtistUser', country?: string | null, email: string, name: string, picture?: string | null } | null };

export type ProfileSongsQueryVariables = Exact<{
  filter?: InputMaybe<SongFilterInput>;
}>;


export type ProfileSongsQuery = { __typename?: 'Query', songs?: Array<{ __typename?: 'Song', id: number, title: string, cover?: string | null, duration: number, release_year?: number | null, isLiked?: boolean | null, artist?: { __typename?: 'Artist', name: string } | null } | null> | null };

export type SongOverviewQueryVariables = Exact<{ [key: string]: never; }>;


export type SongOverviewQuery = { __typename?: 'Query', songs?: Array<{ __typename?: 'Song', id: number, cover?: string | null, title: string, duration: number, artist?: { __typename?: 'Artist', name: string } | null } | null> | null };


export const CreateArtistDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateArtist"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ArtistCreateInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"addArtist"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"country"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"picture"}}]}}]}}]} as unknown as DocumentNode<CreateArtistMutation, CreateArtistMutationVariables>;
export const DeleteArtistDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteArtist"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteArtist"}}]}}]} as unknown as DocumentNode<DeleteArtistMutation, DeleteArtistMutationVariables>;
export const DeleteSongsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteSongs"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"songIds"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteSongs"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"ids"},"value":{"kind":"Variable","name":{"kind":"Name","value":"songIds"}}}]}]}}]} as unknown as DocumentNode<DeleteSongsMutation, DeleteSongsMutationVariables>;
export const LikeSongDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"LikeSong"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"songId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"likeSong"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"songId"}}}]}]}}]} as unknown as DocumentNode<LikeSongMutation, LikeSongMutationVariables>;
export const UnlikeSongDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UnlikeSong"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"songId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"unlikeSong"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"songId"}}}]}]}}]} as unknown as DocumentNode<UnlikeSongMutation, UnlikeSongMutationVariables>;
export const FavoriteSongsQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"FavoriteSongsQuery"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"songs"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"liked"},"value":{"kind":"BooleanValue","value":true}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cover"}},{"kind":"Field","name":{"kind":"Name","value":"duration"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"lyrics"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"isLiked"}},{"kind":"Field","name":{"kind":"Name","value":"release_year"}},{"kind":"Field","name":{"kind":"Name","value":"artist"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]} as unknown as DocumentNode<FavoriteSongsQueryQuery, FavoriteSongsQueryQueryVariables>;
export const ListenPageAlbumsQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ListenPageAlbumsQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"albums"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"artist"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"cover"}},{"kind":"Field","name":{"kind":"Name","value":"release_year"}},{"kind":"Field","name":{"kind":"Name","value":"songs"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"duration"}}]}}]}}]}}]} as unknown as DocumentNode<ListenPageAlbumsQueryQuery, ListenPageAlbumsQueryQueryVariables>;
export const ListenPageSongsQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ListenPageSongsQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"songs"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"artist"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"cover"}},{"kind":"Field","name":{"kind":"Name","value":"duration"}},{"kind":"Field","name":{"kind":"Name","value":"release_year"}},{"kind":"Field","name":{"kind":"Name","value":"isLiked"}}]}}]}}]} as unknown as DocumentNode<ListenPageSongsQueryQuery, ListenPageSongsQueryQueryVariables>;
export const LoginDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Login"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"LoginInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"login"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"expire_at"}},{"kind":"Field","name":{"kind":"Name","value":"token"}}]}}]}}]} as unknown as DocumentNode<LoginQuery, LoginQueryVariables>;
export const ProfileAlbumsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ProfileAlbums"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filter"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"AlbumFilterInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"albums"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filter"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"artist"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"cover"}},{"kind":"Field","name":{"kind":"Name","value":"release_year"}},{"kind":"Field","name":{"kind":"Name","value":"songs"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"duration"}}]}}]}}]}}]} as unknown as DocumentNode<ProfileAlbumsQuery, ProfileAlbumsQueryVariables>;
export const ProfileDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Profile"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"profile"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"country"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"picture"}}]}}]}}]} as unknown as DocumentNode<ProfileQuery, ProfileQueryVariables>;
export const ProfileSongsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ProfileSongs"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filter"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"SongFilterInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"songs"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filter"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"artist"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"cover"}},{"kind":"Field","name":{"kind":"Name","value":"duration"}},{"kind":"Field","name":{"kind":"Name","value":"release_year"}},{"kind":"Field","name":{"kind":"Name","value":"isLiked"}}]}}]}}]} as unknown as DocumentNode<ProfileSongsQuery, ProfileSongsQueryVariables>;
export const SongOverviewDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"SongOverview"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"songs"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"5"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"cover"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"duration"}},{"kind":"Field","name":{"kind":"Name","value":"artist"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]} as unknown as DocumentNode<SongOverviewQuery, SongOverviewQueryVariables>;