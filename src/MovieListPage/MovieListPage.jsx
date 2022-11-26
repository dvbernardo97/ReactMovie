import React from "react";
import MovieCard from "./MovieCard";


function MovieListPage({ movies }) {
    const movieList = movies.map((movie) => {
        return (
            <MovieCard key={movie.title} movie={movie} />
        )
    })
    return (
        <>
            <h1> Movie List</h1>
            {movieList}
        </>
    )
}


export default MovieListPage