import { gql } from '../../types/__generated_schemas__/gql';

const UpdateProfileMutation = gql(`
  mutation UpdateProfile($input: ArtistUpdateInput!) {
    updateArtist(input: $input) {
      email
      country
      name
      picture
    }
  }
`);

export default UpdateProfileMutation;
