import { gql } from '../../types/__generated_schemas__/gql';

const DeleteAlbumMutation = gql(`
  mutation DeleteAlbum($albumId: Int!) {
    deleteAlbum(id: $albumId)
  }
`);

export default DeleteAlbumMutation;
