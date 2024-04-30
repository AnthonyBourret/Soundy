import { gql } from '../../types/__generated_schemas__/gql';

const LikeSongMutation = gql(`
  mutation LikeSong($songId: Int!) {
    likeSong(id: $songId)
  }
`);

export default LikeSongMutation;
