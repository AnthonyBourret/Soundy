import { gql } from '@apollo/client/core';

const ProfileQuery = gql`
  query ProfileQuery() {
    profile {
      country
      name
      picture
      email
    }
  }
`;

export default ProfileQuery;
