import { useState } from "react"
import movieData from "./MovieData"
import MovieList from "./MovieList"
import Filter from "./Filter"
import Search from "./Search"

function MovieCard() {

    const [filterMovie, setFilterMovie] = useState(0)
    const [searchMovie, setSearchMovie] = useState("")

    return <div>
        <div className="filterSearch">
            <Filter filterMovie={filterMovie} setFilterMovie={setFilterMovie} /> 
            <Search searchMovie={searchMovie} setSearchMovie={setSearchMovie} />
        </div>
        <div className="cards">
            {movieData
                .filter(({title, id, posterURL, rating, description, trailer}) => 
                    (!searchMovie || title.toLowerCase().includes(searchMovie.toLowerCase())) ?
                        <MovieList key={id}
                            id={id}
                            title={title}
                            posterURL={posterURL}
                            rating={rating}
                            description={description}
                            trailer={trailer}
                        /> : null 
                )
                .map(({title, id, posterURL, rating, description, trailer}) => 
                    (!filterMovie || filterMovie === rating) ?
                        <MovieList key={id}
                            id={id}
                            title={title}
                            posterURL={posterURL}
                            rating={rating}
                            description={description}
                            trailer={trailer}
                        /> : null
            )}
        </div>
    </div>
}

export default MovieCard