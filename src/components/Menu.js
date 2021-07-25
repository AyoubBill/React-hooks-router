import { NavLink } from "react-router-dom"
import "../App.css"

function Menu() {
    return <ul>
    <li><NavLink className="a" to="/">Home</NavLink></li>
    <li><NavLink className="a" to="/description">Description</NavLink></li>
    <li><NavLink className="a" to="/trailer">Trailer</NavLink></li>
  </ul>
}

export default Menu 