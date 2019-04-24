import React from "react";
import Books from "./pages/Books";
import Nav from "./components/Nav";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" exact component={Home} />
          <Redirect from="/books" to="/" />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div>
      <Nav />
      <Books />
    </div>
  );
}

export default App;
