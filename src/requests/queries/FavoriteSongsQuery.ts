import { gql } from '@apollo/client/core';

const FavotiteSongsQuery = gql`
query FavoriteSongsQuery {
    songs(filter: { liked: true }) {
        cover
        duration
        id
        lyrics
        title
        isLiked
        release_year
        artist {
            name
        }
    }
}
`;

export default FavotiteSongsQuery;
