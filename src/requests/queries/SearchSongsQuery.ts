import { gql } from '../../types/__generated_schemas__/gql';

const SearchSongsQuery = gql(`
  query SearchSongsQuery($limit: Int, $filter: SongFilterInput) {
    songs(limit: $limit, filter: $filter) {
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

export default SearchSongsQuery;
