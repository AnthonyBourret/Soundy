import { gql } from '../../types/__generated_schemas__/gql';

const SongListenPageQuery = gql(`
  query SongListenPageQuery($limit: Int) {
    songs(limit: $limit) {
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
    albums{
      id
      title
      cover
      release_year
      songs {
        id
        title
        duration
      }
    }
  }
`);

export default SongListenPageQuery;
