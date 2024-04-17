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
      songOnAlbum {
        album_id
      }
      isLiked
    }
    albums{
      id
      title
      artist {
          name
      }
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
