import logo from './logo.svg';
import './App.css';
import Rock from './models/Rock';
import Paper from './models/Paper';
import Scissors from './models/Scissors';
import {checkWin, cpuMove} from './utils/moves';

function App() {
  
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Choose your move:
        </p>
        <Rock onChoose={ () => alert(checkWin('ROCK', cpuMove())) }/>
        <Paper onChoose={ () => alert(checkWin('PAPER', cpuMove())) }/>
        <Scissors onChoose={ () => alert(checkWin('SCISSORS', cpuMove())) }/>
      </header>
    </div>
  );
}

export default App;
