import "../App.css"

function Filter({filterMovie, setFilterMovie}) {

    const rating = [1, 2, 3, 4, 5]

    return <div className="bloc">
        <div className="select">
            <select value={filterMovie} onChange={(e) => setFilterMovie(e.target.value)}>
                <option value="">Choose a movie by rate</option>
                {rating.map((item, index) => <option key={index}>
                    {(item <= rating.length) ? item : null}
                </option>)}
            </select>
        </div>
    </div>
}

export default Filter