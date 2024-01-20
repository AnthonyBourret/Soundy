import { gql } from '@apollo/client/core';

const LoginQuery = gql`
  query LoginQuery($input: LoginInput!) {
    login(input: $input) {
      expire_at
      token
    }
  }
`;

export default LoginQuery;
