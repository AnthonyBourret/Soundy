import { gql } from '@apollo/client/core';

const SongOverviewQuery = gql`
  query SongOverviewQuery {
    songs(limit: 5) {
      id
      cover
      title
      artist {
        name
      }
    }
  }
`;

export default SongOverviewQuery;
