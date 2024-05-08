import { gql } from '../../types/__generated_schemas__/gql';

const ProfileAlbums = gql(`
  query ProfileAlbums($filter: AlbumFilterInput) {
    albums(filter: $filter){
      id
      title
      artist {
        name
      }
      cover
      release_year
      songs {
        id
        title
        duration
      }
    }
  }
`);

export default ProfileAlbums;
