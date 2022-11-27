import { Link } from "react-router-dom"



export default function MovieCard({ movie }) {
    return (
        <>
            <p><Link to={`/movies/${movie.title}`}> Title: {movie.title} | Release Date: {movie.releaseDate}</Link></p>

            <img src={movie.posterPath} alt={movie.title}></img>
        </>
    )
}