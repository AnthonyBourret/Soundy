import { gql } from '../../types/__generated_schemas__/gql';

const UnlikeSongMutation = gql(`
  mutation UnlikeSong($songId: Int!) {
    unlikeSong(id: $songId)
  }
`);

export default UnlikeSongMutation;
