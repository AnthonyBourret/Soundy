import { gql } from '@apollo/client/core';

const AlbumListenPageQuery = gql`
query AlbumListenPageQuery {
    albums {
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
`;

export default AlbumListenPageQuery;
