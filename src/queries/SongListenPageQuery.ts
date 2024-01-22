import { gql } from '@apollo/client/core';

const SongListenPageQuery = gql`
  query SongListenPageQuery {
  songs(limit: 20) {
    id
    title
    artist {
      name
    }
    cover
    duration
  }
  }
`;

export default SongListenPageQuery;
