import { BrowserRouter , Routes, Route, Link} from 'react-router-dom';
import Home from './views/Home';
import About from './views/About';
import Services from './views/Services';
import Products from './views/Products';
import Contact from './views/Contact';
import './App.css';
import 'bootstrap/scss/bootstrap.scss'

function App() {
  return (
    <BrowserRouter >
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">25Watts</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link className="nav-link" to="/">Home</Link>
              <Link className="nav-link" to="/about">About</Link>
              <Link className="nav-link" to="/products">Products</Link>
              <Link className="nav-link" to="/services">Services</Link>
              <Link className="nav-link" to="/contact">Contact</Link>
            </div>
          </div>
      </div>
</nav>
    <div>
      
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>} />
            <Route path="/products" element={<Products/>} />
            <Route path="/services" element={<Services/>} />
            <Route path="/contact" element={<Contact/>} />
        </Routes>
        </div>
      </BrowserRouter>
  );
}

export default App;
