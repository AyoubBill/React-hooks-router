import movieData from "./MovieData"

function Trailer({match}) {

    const datas = movieData.map((m, k) => 
    (m.id === match.params.id) ? 
        <div key={k}>
            <video src={m.trailer} controls width="900px" height="500px"></video>
        </div> : null
    )

    return(
        <div className="view-video">{datas}</div>
    )
}

export default Trailer

