import { gql } from '../../types/__generated_schemas__/gql';

const DeleteSongsMutation = gql(`
  mutation DeleteSongs($songIds: [Int!]!) {
    deleteSongs(ids: $songIds)
  }
`);

export default DeleteSongsMutation;
