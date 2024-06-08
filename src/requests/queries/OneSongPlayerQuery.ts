import { gql } from '../../types/__generated_schemas__/gql';

const OneSongPlayerQuery = gql(`
  query OneSongPlayerQuery($songId: Int!) {
    song(id: $songId) {
      title
      duration
    }
  }
`);

export default OneSongPlayerQuery;
