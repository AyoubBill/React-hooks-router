

function Search({searchMovie, setSearchMovie}) {

    return <form>
        <input type="text" name="search" 
            placeholder="Search.." 
            value={searchMovie} 
            onChange={(e) => setSearchMovie(e.target.value)}    
        />
    </form>
}

export default Search 