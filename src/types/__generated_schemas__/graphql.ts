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
  artist: Artist;
  artist_id?: Maybe<Scalars['Int']['output']>;
  cover?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  release_year?: Maybe<Scalars['Int']['output']>;
  songs?: Maybe<Array<Maybe<Song>>>;
  title: Scalars['String']['output'];
};

export type AlbumCreateInput = {
  artist_id: Scalars['Int']['input'];
  cover?: InputMaybe<Scalars['String']['input']>;
  release_year?: InputMaybe<Scalars['Int']['input']>;
  songIds: Array<Scalars['Int']['input']>;
  title: Scalars['String']['input'];
};

export type AlbumFilterInput = {
  release_year?: InputMaybe<ReleaseYear>;
};

export type AlbumUpdateInput = {
  artist_id?: InputMaybe<Scalars['Int']['input']>;
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
  addSong?: Maybe<Song>;
  deleteAlbum?: Maybe<Scalars['Boolean']['output']>;
  deleteArtist?: Maybe<Scalars['Boolean']['output']>;
  deleteSongs?: Maybe<Scalars['Boolean']['output']>;
  likeSong?: Maybe<Scalars['Boolean']['output']>;
  unlikeSong?: Maybe<Scalars['Boolean']['output']>;
  updateAlbum?: Maybe<Album>;
  updateArtist?: Maybe<Artist>;
};


export type MutationAddAlbumArgs = {
  input: AlbumCreateInput;
};


export type MutationAddSongArgs = {
  input: SongCreateInput;
};


export type MutationDeleteAlbumArgs = {
  id: Scalars['Int']['input'];
};


export type MutationDeleteArtistArgs = {
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
  id: Scalars['Int']['input'];
  input: AlbumUpdateInput;
};


export type MutationUpdateArtistArgs = {
  id: Scalars['Int']['input'];
  input: ArtistUpdateInput;
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
  cover?: Maybe<Scalars['String']['output']>;
  /** Duration in second */
  duration: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  isLiked?: Maybe<Scalars['Boolean']['output']>;
  like?: Maybe<Array<Maybe<ArtistLikeSong>>>;
  lyrics?: Maybe<Scalars['String']['output']>;
  nbLike?: Maybe<Scalars['Int']['output']>;
  songOnAlbum?: Maybe<Array<Maybe<SongOnAlbum>>>;
  title: Scalars['String']['output'];
};

export type SongCreateInput = {
  artistId: Scalars['Int']['input'];
  cover?: InputMaybe<Scalars['String']['input']>;
  duration: Scalars['Int']['input'];
  lyrics?: InputMaybe<Scalars['String']['input']>;
  title: Scalars['String']['input'];
};

export type SongFilterInput = {
  duration_filter?: InputMaybe<DurationRange>;
};

export type SongOnAlbum = {
  __typename?: 'SongOnAlbum';
  album_id: Scalars['Int']['output'];
  position: Scalars['Int']['output'];
  song_id: Scalars['Int']['output'];
};

export type MutationMutationVariables = Exact<{
  songId: Scalars['Int']['input'];
}>;


export type MutationMutation = { __typename?: 'Mutation', likeSong?: boolean | null };

export type UnlikeSongMutationVariables = Exact<{
  songId: Scalars['Int']['input'];
}>;


export type UnlikeSongMutation = { __typename?: 'Mutation', unlikeSong?: boolean | null };

export type AlbumListenPageQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type AlbumListenPageQueryQuery = { __typename?: 'Query', albums?: Array<{ __typename?: 'Album', id: number, title: string, cover?: string | null, release_year?: number | null, artist: { __typename?: 'Artist', name: string }, songs?: Array<{ __typename?: 'Song', id: number, title: string, duration: number } | null> | null } | null> | null };

export type LoginQueryVariables = Exact<{
  input: LoginInput;
}>;


export type LoginQuery = { __typename?: 'Query', login?: { __typename?: 'JWT', expire_at?: string | null, token?: string | null } | null };

export type ProfileQueryVariables = Exact<{ [key: string]: never; }>;


export type ProfileQuery = { __typename?: 'Query', profile?: { __typename?: 'ArtistUser', country?: string | null, name: string, picture?: string | null, email: string } | null };

export type SongListenPageQueryQueryVariables = Exact<{
  limit?: InputMaybe<Scalars['Int']['input']>;
}>;


export type SongListenPageQueryQuery = { __typename?: 'Query', songs?: Array<{ __typename?: 'Song', id: number, title: string, cover?: string | null, duration: number, isLiked?: boolean | null, artist?: { __typename?: 'Artist', name: string } | null, songOnAlbum?: Array<{ __typename?: 'SongOnAlbum', album_id: number } | null> | null } | null> | null, albums?: Array<{ __typename?: 'Album', id: number, title: string, cover?: string | null, release_year?: number | null, songs?: Array<{ __typename?: 'Song', id: number, title: string, duration: number } | null> | null } | null> | null };

export type SongOverviewQueryVariables = Exact<{ [key: string]: never; }>;


export type SongOverviewQuery = { __typename?: 'Query', songs?: Array<{ __typename?: 'Song', id: number, cover?: string | null, title: string, artist?: { __typename?: 'Artist', name: string } | null } | null> | null };


export const MutationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"Mutation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"songId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"likeSong"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"songId"}}}]}]}}]} as unknown as DocumentNode<MutationMutation, MutationMutationVariables>;
export const UnlikeSongDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UnlikeSong"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"songId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"unlikeSong"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"songId"}}}]}]}}]} as unknown as DocumentNode<UnlikeSongMutation, UnlikeSongMutationVariables>;
export const AlbumListenPageQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"AlbumListenPageQuery"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"albums"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"artist"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"cover"}},{"kind":"Field","name":{"kind":"Name","value":"release_year"}},{"kind":"Field","name":{"kind":"Name","value":"songs"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"duration"}}]}}]}}]}}]} as unknown as DocumentNode<AlbumListenPageQueryQuery, AlbumListenPageQueryQueryVariables>;
export const LoginDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Login"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"LoginInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"login"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"expire_at"}},{"kind":"Field","name":{"kind":"Name","value":"token"}}]}}]}}]} as unknown as DocumentNode<LoginQuery, LoginQueryVariables>;
export const ProfileDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Profile"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"profile"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"country"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"picture"}},{"kind":"Field","name":{"kind":"Name","value":"email"}}]}}]}}]} as unknown as DocumentNode<ProfileQuery, ProfileQueryVariables>;
export const SongListenPageQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"SongListenPageQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"songs"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"artist"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"cover"}},{"kind":"Field","name":{"kind":"Name","value":"duration"}},{"kind":"Field","name":{"kind":"Name","value":"songOnAlbum"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"album_id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"isLiked"}}]}},{"kind":"Field","name":{"kind":"Name","value":"albums"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"cover"}},{"kind":"Field","name":{"kind":"Name","value":"release_year"}},{"kind":"Field","name":{"kind":"Name","value":"songs"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"duration"}}]}}]}}]}}]} as unknown as DocumentNode<SongListenPageQueryQuery, SongListenPageQueryQueryVariables>;
export const SongOverviewDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"SongOverview"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"songs"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"5"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"cover"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"artist"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]} as unknown as DocumentNode<SongOverviewQuery, SongOverviewQueryVariables>;