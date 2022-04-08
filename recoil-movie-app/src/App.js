import { RecoilRoot } from "recoil";
import Movie from "./api/movie";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";


const movie = new Movie();
function App() {
  return (
    <div className="App">
      <RecoilRoot>
      <Router>
        <Switch>
          <Route path="/movie/:id">
            <Detail movie={movie} />
          </Route>
          <Route path="/">
            <Home movie={movie} />
          </Route>
        </Switch>
      </Router>
      </RecoilRoot>
    </div>
  );
}

export default App;
