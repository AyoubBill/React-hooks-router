import { useState } from "react"
import movieData from "./MovieData"
import MovieList from "./MovieList"
import Filter from "./Filter"


function MovieCard() {

    const [filterMovie, setFilterMovie] = useState("")

    return <div>
        <Filter movieData={movieData} filterMovie={filterMovie} setFilterMovie={setFilterMovie} /> 
        <div className="cards">
            {movieData.map(({title, id, posterURL, rating, description}) => 
            (!filterMovie || filterMovie === title) ?
                <MovieList 
                    key={id}
                    title={title}
                    posterURL={posterURL}
                    rating={rating}
                    description={description}
                /> : null
            )}
        </div>
    </div>
}

export default MovieCard