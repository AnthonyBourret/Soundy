import { gql } from '@apollo/client/core';

const LoginQuery = gql`
  query Login($input: LoginInput!) {
    login(input: $input) {
      expire_at
      token
    }
  }
`;

export default LoginQuery;
