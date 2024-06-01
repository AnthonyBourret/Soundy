import { gql } from '../../types/__generated_schemas__/gql';

const SearchAlbumsQuery = gql(`
  query SearchAlbumsQuery($limit: Int, $filter: AlbumFilterInput) {
    albums(limit: $limit, filter: $filter) {
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

export default SearchAlbumsQuery;
