import { gql } from '../../types/__generated_schemas__/gql';

const CreateArtistMutation = gql(`
  mutation CreateArtist($input: ArtistCreateInput!) {
    addArtist(input: $input) {
      country
      id
      name
      picture
    }
  }
`);

export default CreateArtistMutation;
