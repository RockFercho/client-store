import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation,
  useParams,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
      <Nav />

      <Routes>
        <Route path="/" exact element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact/:country" element={<Contact/>} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </Router>
    </div>
  );
}

function Nav() {
    return (
      <>
        <Link to="/">Home</Link> | <Link to="/about?name=jamis">About</Link> | <Link to="/contact/us">Contact</Link> | <Link to="/arstrast">arstarst</Link>
      </>
    );
  }
  
  function Home() {
    return <p>Home Page Content</p>;
  }
  
  function About() {
    var params = new URLSearchParams(useLocation().search);
    var name = params.get("name");
    return <p>About Page content for {name}</p>;
  }
  
  function Contact() {
    var params = useParams();
    return <p>Contact Page content for {params.country}</p>;
  }
  
  function NotFound() {
    return <p>Oh No! Page not found.</p>;
  }

export default App;
