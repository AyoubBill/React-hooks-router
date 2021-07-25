import '../App.css';
import MovieCard from "./MovieCard";
import Trailer from './Trailer';
import Description from "./Description"
import Menu from './Menu';
import {BrowserRouter, Route} from "react-router-dom"

function App() {

  return <BrowserRouter>
    <Menu />
    <Route exact path="/" component={MovieCard} />
    <Route path="/description/:id" component={Description} />
    <Route path="/trailer/:id" component={Trailer} /> 
  </BrowserRouter>
}
 
export default App







