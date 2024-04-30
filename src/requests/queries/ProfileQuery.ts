import { gql } from '../../types/__generated_schemas__/gql';

const ProfileQuery = gql(`
  query Profile {
    profile {
      country
      email
      name
      picture
    }
  }
`);

export default ProfileQuery;
