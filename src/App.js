import "./App.css";

import React, {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
// import Home from "./pages/Home";
import Movie from "./pages/Movie";
import TV from "./pages/TV";
import Navigasi from "./component/Navbar";
import Detail from "./pages/Detail";
function App() {
  // const DefaultContainer = () => <div></div>;

  return (
    <div>
      <div className="App">
        <Navigasi />
        <Router>
          <Switch>
            <Route path="/" exact component={Movie} />

            <Route path="/Movie" exact component={Movie} />
            <Route path="/TV" exact component={TV} />
            <Route path="/Detail" exact component={Detail} />
            <Route path="/Detail/:menu/:id" exact component={Detail} />
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
