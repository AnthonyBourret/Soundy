import { gql } from '../../types/__generated_schemas__/gql';

const UserSongsQuery = gql(`
  query UserSongsQuery {
    songs(filter: { createdByUser: true}) {
      id
      title
      cover
      duration
    }
  }
`);

export default UserSongsQuery;
