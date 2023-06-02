import './App.css';
import About from './components/About';
import MovieDetail from './components/MovieDetail';
import Movielist from './components/Movielist';
import Navbar from './components/Navbar';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Movielist />} />
          <Route exact path='/about' element={<About />} />
          <Route exact path='/movieDetail' element={<MovieDetail />} />
        </Routes>

      </Router>
    </>
  );
}

export default App;
