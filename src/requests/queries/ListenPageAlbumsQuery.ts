import { gql } from '../../types/__generated_schemas__/gql';

const ListenPageAlbumsQuery = gql(`
  query ListenPageAlbumsQuery($limit: Int) {
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

export default ListenPageAlbumsQuery;
