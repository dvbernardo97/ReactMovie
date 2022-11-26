import React from 'react'
import {useParams} from 'react-router-dom'
import {movies} from "../data.js"

function MovieDetailPage() {
    let {movieName} = useParams();
    movieName = movieName.replaceAll('-'," ")
    
    movies.forEach(m => (
        console.log(m.title ==movieName
            )))
    const index = movies.findIndex(({title}) => title == movies)
    console.log(index)
    
    return(
        <>
        <h1>MovieDeatilPage</h1>
        <h2>{movieName}</h2>
        <img src={movies[index].posterPath}></img>
        </>
    )
}




export default MovieDetailPage