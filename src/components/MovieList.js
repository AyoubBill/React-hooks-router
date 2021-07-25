import "../App.css"
import star from "../img/star.png"
import {Link} from "react-router-dom"

function MovieList({title, id, posterURL, rating, description, trailer}) {

    const stars = [1, 2, 3, 4, 5]

    return <div className="card">
        <Link to={`/description/${id}`}>
            <div className="card-image"><img src={posterURL} alt={`${title}`}/></div>
        </Link>
        <div className="card-body">
            <div className="card-rating">
                {stars.map((item, index) => 
                (item <= rating) ? <img src={star} alt='star-icon' key={index} /> : null)}
            </div>      
            <div className="card-title">
                <h3>{title}</h3>
                <Link to={`/trailer/${id}`}>Trailer</Link>
            </div>
        </div>
    </div>
}

export default MovieList
