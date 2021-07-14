import "../App.css"
import star from "../img/star.png"

function MovieList({title, posterURL, rating, description}) {

    const stars = [1, 2, 3, 4, 5]

    return <div className="card">
        <a href="#" />
        <div className="card-image"><img src={posterURL} alt={`${title} movie`}/></div>
        <div className="card-body">
            <div className="card-rating">
                {stars.map((item, index) => 
                (item <= rating) ? <img src={star} alt='star-icon' key={index} /> : null
                )}
            </div>
            <div className="card-title"><h3>{title}</h3></div>
            <div className="card-description"><p>{description}</p></div>
        </div> 
    </div>
}

export default MovieList