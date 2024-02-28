import { gql } from '@apollo/client/core';

const ProfileQuery = gql`
  query Profile {
    profile {
      country
      name
      picture
      email
    }
  }
`;

export default ProfileQuery;
