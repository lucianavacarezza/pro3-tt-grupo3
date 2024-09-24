import React from 'react';
import NotFound from './screens/NotFound/NotFound'; 
import Home from "./screens/Home/Home"
import MovieDetail from "./components/MovieDetail/MovieDetail";
import PeliFavoritas from "./components/PeliFavoritas/PeliFavoritas"; 
import { Switch, Route, BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';
import SearchResults from './screens/SearchResults/SearchResults';
import MasPopulares from './screens/MasPopulares/MasPopulares';




function App() {
  return (

      <React.Fragment>
        <Switch>
        <Route path="/" exact={true} component={Home}/>
        <Route path="/movie/:id" component={MovieDetail}/>
        <Route path="/favorites" component={PeliFavoritas}/>
        <Route path="/populars" component={MasPopulares}/>
        <Route path= "/searchResults/:peliculas" component={SearchResults}/>
        <Route path="" component= {NotFound}/>
        </Switch>
      </React.Fragment>

  );
}


export default App;
