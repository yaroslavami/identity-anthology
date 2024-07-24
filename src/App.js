import './app.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Identity from './identity';
import One from './story1';
import Two from './story2';
import Three from './story3';
import Four from './story4';
import Five from './story5';
import Biography from './biography';
import renderLogo from './render-logo.png';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <nav>
            <ul>
              <li><Link to="/">Identity</Link></li>
              <li><Link to="/story1">The Father</Link></li>
              <li><Link to="/story2">This I Believe</Link></li>
              <li><Link to="/story3">9 Tips To Identity</Link></li>
              <li><Link to="/story4">Childhood Trauma</Link></li>
              <li><Link to="/story5">So What Are You?</Link></li>
              <li><Link to="/biography">Annotated Bibliography</Link></li>
            </ul>
          </nav>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Identity />} />
            <Route path="/story1" element={<One />} />
            <Route path="/story2" element={<Two />} />
            <Route path="/story3" element={<Three />} />
            <Route path="/story4" element={<Four />} />
            <Route path="/story5" element={<Five />} />
            <Route path="/biography" element={<Biography />} />
          </Routes>
        </main>
        <footer>
          <ul>
            <li><a href="https://github.com/yaroslavami"><i class="fab fa-github"></i></a></li>
            <li><a href="https://www.linkedin.com/in/yaroslava-mishchenko-513439286/"><i class="fab fa-linkedin"></i></a></li>
          </ul>
          <div className="powered-by">
            <p>Powered by</p>
            <p>Render</p>
            <img alt="render-logo" src={renderLogo}></img>
            <p>Created by</p>
            <p>Yaroslava</p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;