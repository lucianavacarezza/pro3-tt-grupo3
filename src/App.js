import React from 'react';
import NotFound from './screens/NotFound/NotFound'; 
import Home from "./screens/Home/Home"
import MovieDetail from "./components/MovieDetail/MovieDetail";
import PeliFavoritas from "./components/PeliFavoritas/PeliFavoritas"; 
import { Switch, Route, BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';




function App() {
  return (
    <BrowserRouter>
      <React.Fragment>
        <Switch>
        <Route path="/" exact={true} component={Home}/>
        <Route path="/movie/:id" component={MovieDetail}/>
        <Route path="/favorites" component={PeliFavoritas}/>
        <Route path="" component= {NotFound}/>
        </Switch>
      </React.Fragment>
    </BrowserRouter>
  );
}


export default App;
