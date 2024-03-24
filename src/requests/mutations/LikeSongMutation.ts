import { gql } from '../../types/__generated_schemas__/gql';

const LikeSongMutation = gql(`
  mutation Mutation($songId: Int!) {
    likeSong(id: $songId)
  }
`);

export default LikeSongMutation;
