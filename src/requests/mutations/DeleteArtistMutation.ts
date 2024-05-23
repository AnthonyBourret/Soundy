import { gql } from '../../types/__generated_schemas__/gql';

const DeleteArtistMutation = gql(`
  mutation Mutation {
    deleteArtist
  }
`);

export default DeleteArtistMutation;
