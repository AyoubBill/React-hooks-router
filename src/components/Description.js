import movieData from "./MovieData"
import "../App.css"

function Description({match}) {  

    const datas = movieData.map((m, k) => 
        (m.id === match.params.id) ? 
            <div key={k}>
                <img src={m.posterURL} alt={`${m.title}`} />
                <div className="description-para">
                    <h2>Description</h2>
                    <p>{m.description}</p>
                </div>
            </div> : null
    )
   
    return(
        <div className="view-img">
            {datas}
        </div>
    )
}

export default Description