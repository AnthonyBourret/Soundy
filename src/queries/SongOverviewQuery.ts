import { gql } from '@apollo/client/core';

const SongOverviewQuery = gql`
  query SongOverviewQuery {
    # songs(first: 5) {
    songs {
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
