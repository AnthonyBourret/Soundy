import { gql } from '../../types/__generated_schemas__/gql';

const ListenPageQuery = gql(`
  query ListenPageQuery($limit: Int) {
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
    albums(limit: $limit){
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

export default ListenPageQuery;
