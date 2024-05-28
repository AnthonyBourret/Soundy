import { gql } from '../../types/__generated_schemas__/gql';

const UpdateAlbumMutation = gql(`
  mutation UpdateAlbum(
    $albumId: Int!,
    $input: AlbumUpdateInput!
  ) {
    updateAlbum(
      albumId: $albumId,
      input: $input
    ) {
      title
      cover
      release_year
    }
  }
`);

export default UpdateAlbumMutation;
