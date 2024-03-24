import { gql } from '@apollo/client/core';

const SongOverviewQuery = gql`
  query SongOverview {
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
