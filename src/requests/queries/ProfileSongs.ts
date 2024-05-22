import { gql } from '../../types/__generated_schemas__/gql';

const ProfileSongs = gql(`
  query ProfileSongs($filter: SongFilterInput) {
    songs(filter: $filter) {
      id
      title
      artist {
        name
      }
      cover
      duration
      release_year
      isLiked
    }
  }
`);

export default ProfileSongs;
