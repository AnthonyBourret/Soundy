import { gql } from '@apollo/client/core';

const SongListenPageQuery = gql`
query SongListenPageQuery($limit: Int) {
  songs(limit: $limit) {
    id
    title
    artist {
      name
    }
    cover
    duration
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
`;

export default SongListenPageQuery;