import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import Nav from "./components/Nav";
import Home from "./components/Home";
import Contact from "./components/Contact";
import About from "./components/About";
import NotFound from './components/NotFound';
import GetProduct from './components/GetProduct';

function App() {
  return (
    <div className="App">
      <Router>
      <Nav />

      <Routes>
        <Route path="/" exact element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/product" element={<GetProduct/>} />
        <Route path="/contact/:country" element={<Contact/>} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
