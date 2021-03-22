import "./App.css";

import React, {
  BrowserRouter as Router,
  Switch,
  Route,
  HashRouter,
} from "react-router-dom";
import TopRated from "./pages/TopRated";
import Popular from "./pages/Popular";
import Home from "./pages/Home";
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
        <HashRouter basename="/">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/Popular" exact component={Popular} />
            <Route path="/TopRated" exact component={TopRated} />
            <Route path="/Movie" exact component={Movie} />
            <Route path="/TV" exact component={TV} />
            <Route path="/Detail" exact component={Detail} />
            <Route path="/Detail/:menu/:id" exact component={Detail} />
          </Switch>
        </HashRouter>
      </div>
    </div>
  );
}

export default App;
