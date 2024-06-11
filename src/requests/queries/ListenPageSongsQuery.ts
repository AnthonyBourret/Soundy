import { gql } from '../../types/__generated_schemas__/gql';

const ListenPageSongsQuery = gql(`
  query ListenPageSongsQuery($limit: Int, $offset: Int) {
    songs(limit: $limit, offset: $offset) {
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

export default ListenPageSongsQuery;
