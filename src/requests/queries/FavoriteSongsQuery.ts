import { gql } from '../../types/__generated_schemas__/gql';

const FavotiteSongsQuery = gql(`
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
`);

export default FavotiteSongsQuery;
