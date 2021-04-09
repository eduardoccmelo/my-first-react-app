import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import Hobbies from "./components/Hobbies";
import Contact from "./components/Contact";

import {
  BrowserRouter as Router,
  NavLink,
  Switch,
  Route,
} from "react-router-dom";
function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <nav className="nav">
            <NavLink exact to="/">
              Home
            </NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/hobbies">Hobbies</NavLink>
            <NavLink to="contact">Contact</NavLink>
          </nav>
        </header>
        <main>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/hobbies">
              <Hobbies />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
          </Switch>
        </main>
        <div>Footer</div>
      </div>
    </Router>
  );
}

export default App;
