import { useParams } from 'react-router-dom'


function MovieDetailPage({ movies }) {
    const tn = useParams();
    console.log(tn)
    const movie = movies.find(movie => movie.title === tn.title)
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