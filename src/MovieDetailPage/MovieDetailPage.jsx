import { movies } from '../data';
import { useParams } from 'react-router-dom'



function MovieDetailPage({ movies }) {
    let { movieName } = useParams();
    console.log(movieName)
    let movie = movies.find(movie => movie.title === movieName)
    console.log(movie)
    return (
        <>
            <h1>{movie.title}</h1>
            <h2>{movie.releaseDate}</h2>
            <img src={movie.posterPath} alt={movie.title}></img>
            <p><strong>Cast: </strong> {movie.cast.join(', ')}</p>
        </>
    )
}




export default MovieDetailPage