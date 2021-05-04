import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Homepage from './components/HomePage';
import Play from './components/Play';
import { 
  Route, Switch
} from 'react-router-dom';

function App() {
  

  return (
    
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/">
            <Homepage />
          </Route>
          <Route path="/play">
            <Play />
          </Route>
        </Switch>
      </div>

  );
}

export default App;
