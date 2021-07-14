import "../App.css"

function Filter({movieData, filterMovie, setFilterMovie}) {

    return <div className="bloc">
        <div className="select">
            <select value={filterMovie} onChange={(e) => setFilterMovie(e.target.value)}>
                <option value="">Choose a movie</option>
                {movieData.map((item, index) => <option key={index}>{item.title}</option>)}
            </select>
        </div>
    </div>
}

export default Filter