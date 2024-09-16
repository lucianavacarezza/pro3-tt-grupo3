import './App.css';
import NotFound from './screens/NotFound/NotFound'; 
import { Switch, Route } from 'react-router-dom/cjs/react-router-dom.min';


function App() {
  return (
    <Switch>
    <Route path="" component= {NotFound}/>
    </Switch>
  );
}


export default App;
