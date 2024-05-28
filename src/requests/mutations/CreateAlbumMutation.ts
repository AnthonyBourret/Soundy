import { gql } from '../../types/__generated_schemas__/gql';

const CreateAlbumMutation = gql(`
  mutation CreateAlbum($input: AlbumCreateInput!) {
    addAlbum(input: $input) {
        id
        title
        cover
        release_year
        songs {
            id
        }
    }
    }
`);

export default CreateAlbumMutation;
