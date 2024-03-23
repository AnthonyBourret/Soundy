import { gql } from '../types/__generated_schemas__/gql';

const ProfileQuery = gql(`
  query Profile {
    profile {
      country
      name
      picture
      email
    }
  }
`);

export default ProfileQuery;
