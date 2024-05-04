import { gql } from '../../types/__generated_schemas__/gql';

const ListenPageSongsQuery = gql(`
  query ListenPageSongsQuery($limit: Int) {
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
  }
`);

export default ListenPageSongsQuery;
