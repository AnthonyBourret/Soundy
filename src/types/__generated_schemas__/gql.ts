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
    "\n  mutation Mutation($songId: Int!) {\n    likeSong(id: $songId)\n  }\n": types.MutationDocument,
    "\n  mutation UnlikeSong($songId: Int!) {\n    unlikeSong(id: $songId)\n  }\n": types.UnlikeSongDocument,
    "\nquery FavoriteSongsQuery {\n    songs(filter: { liked: true }) {\n        cover\n        duration\n        id\n        lyrics\n        title\n        isLiked\n        release_year\n        artist {\n            name\n        }\n    }\n}\n": types.FavoriteSongsQueryDocument,
    "\n  query ListenPageAlbumsQuery($limit: Int) {\n    albums(limit: $limit){\n      id\n      title\n      artist {\n        name\n      }\n      cover\n      release_year\n      songs {\n        id\n        title\n        duration\n      }\n    }\n  }\n": types.ListenPageAlbumsQueryDocument,
    "\n  query ListenPageSongsQuery($limit: Int) {\n    songs(limit: $limit) {\n      id\n      title\n      artist {\n        name\n      }\n      cover\n      duration\n      release_year\n      isLiked\n    }\n  }\n": types.ListenPageSongsQueryDocument,
    "\n  query Login($input: LoginInput!) {\n    login(input: $input) {\n      expire_at\n      token\n    }\n  }\n": types.LoginDocument,
    "\n  query Profile {\n    profile {\n      country\n      name\n      picture\n      email\n    }\n  }\n": types.ProfileDocument,
    "\n  query SongOverview {\n    songs(limit: 5) {\n      id\n      cover\n      title\n      artist {\n        name\n      }\n    }\n  }\n": types.SongOverviewDocument,
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
export function gql(source: "\n  mutation Mutation($songId: Int!) {\n    likeSong(id: $songId)\n  }\n"): (typeof documents)["\n  mutation Mutation($songId: Int!) {\n    likeSong(id: $songId)\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation UnlikeSong($songId: Int!) {\n    unlikeSong(id: $songId)\n  }\n"): (typeof documents)["\n  mutation UnlikeSong($songId: Int!) {\n    unlikeSong(id: $songId)\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nquery FavoriteSongsQuery {\n    songs(filter: { liked: true }) {\n        cover\n        duration\n        id\n        lyrics\n        title\n        isLiked\n        release_year\n        artist {\n            name\n        }\n    }\n}\n"): (typeof documents)["\nquery FavoriteSongsQuery {\n    songs(filter: { liked: true }) {\n        cover\n        duration\n        id\n        lyrics\n        title\n        isLiked\n        release_year\n        artist {\n            name\n        }\n    }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query ListenPageAlbumsQuery($limit: Int) {\n    albums(limit: $limit){\n      id\n      title\n      artist {\n        name\n      }\n      cover\n      release_year\n      songs {\n        id\n        title\n        duration\n      }\n    }\n  }\n"): (typeof documents)["\n  query ListenPageAlbumsQuery($limit: Int) {\n    albums(limit: $limit){\n      id\n      title\n      artist {\n        name\n      }\n      cover\n      release_year\n      songs {\n        id\n        title\n        duration\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query ListenPageSongsQuery($limit: Int) {\n    songs(limit: $limit) {\n      id\n      title\n      artist {\n        name\n      }\n      cover\n      duration\n      release_year\n      isLiked\n    }\n  }\n"): (typeof documents)["\n  query ListenPageSongsQuery($limit: Int) {\n    songs(limit: $limit) {\n      id\n      title\n      artist {\n        name\n      }\n      cover\n      duration\n      release_year\n      isLiked\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query Login($input: LoginInput!) {\n    login(input: $input) {\n      expire_at\n      token\n    }\n  }\n"): (typeof documents)["\n  query Login($input: LoginInput!) {\n    login(input: $input) {\n      expire_at\n      token\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query Profile {\n    profile {\n      country\n      name\n      picture\n      email\n    }\n  }\n"): (typeof documents)["\n  query Profile {\n    profile {\n      country\n      name\n      picture\n      email\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query SongOverview {\n    songs(limit: 5) {\n      id\n      cover\n      title\n      artist {\n        name\n      }\n    }\n  }\n"): (typeof documents)["\n  query SongOverview {\n    songs(limit: 5) {\n      id\n      cover\n      title\n      artist {\n        name\n      }\n    }\n  }\n"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;