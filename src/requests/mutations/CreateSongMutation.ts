import { gql } from '../../types/__generated_schemas__/gql';

const CreateSongMutation = gql(`
  mutation CreateSong($input: SongCreateInput!) {
    addSong(input: $input) {
      id
      artist {
        name
      }
      title
      cover
      duration
      release_year
      lyrics
    }
  }
`);

export default CreateSongMutation;
