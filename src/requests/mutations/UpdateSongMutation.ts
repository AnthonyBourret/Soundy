import { gql } from '../../types/__generated_schemas__/gql';

const UpdateSongMutation = gql(`
  mutation UpdateSong(
    $songId: Int!,
    $input: SongUpdateInput!
  ) {
    updateSong(
      songId: $songId,
      input: $input
    ) {
      title
      cover
      release_year
    }
  }
`);

export default UpdateSongMutation;
