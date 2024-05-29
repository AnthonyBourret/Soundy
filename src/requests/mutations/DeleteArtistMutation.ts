import { gql } from '../../types/__generated_schemas__/gql';

const DeleteArtistMutation = gql(`
  mutation DeleteArtist {
    deleteArtist
  }
`);

export default DeleteArtistMutation;
