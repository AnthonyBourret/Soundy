import { gql } from '../../types/__generated_schemas__/gql';

const UserSongsQuery = gql(`
  query UserSongsQuery($createdByUser: Boolean!) {
    songs(filter: { createdByUser: $createdByUser}) {
      id
      title
      cover
      duration
    }
  }
`);

export default UserSongsQuery;
