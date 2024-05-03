import { gql } from '../../types/__generated_schemas__/gql';

const CreateSongMutation = gql(`
  mutation CreateSong($input: SongCreateInput!) {
    addSong(input: $input) {
      id
      artist_id
      title
      cover
      lyrics
    }
  }
`);

export default CreateSongMutation;
