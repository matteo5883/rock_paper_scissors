import { Link, useLocation } from 'react-router-dom';
import { cpuMove, checkWin } from '../utils/moves';
import './_Play.scss';
import Result from './Result';
import Rock from './Rock';
import Paper from './Paper';
import Scissors from './Scissors';

const Play = (props) => {

    const getIcon = (icon) => {

        return icon === 'PAPER' ? <Paper /> : (
            icon === 'ROCK' ? <Rock /> : <Scissors />
        )
    }

    const getResultMessage = (winner) => (
        winner === 'WIN' ? "YOU WIN" : (
            winner === 'DRAW' ? "DRAW" : "YOU LOOSE"
        )
    )

    const getResultClass = (winner) => (
        winner === 'WIN' ? "win" : (
            winner === 'DRAW' ? "draw" : "loose"
        )
    )

    let location = useLocation();
    const playerChampion = location.state.selected;
    const cpuChampion = cpuMove();
    const winner = checkWin(playerChampion, cpuChampion);

    const playerIcon = getIcon(playerChampion);
    const cpuIcon = getIcon(cpuChampion);

    const resultMessage = getResultMessage(winner);
    const resultClass = getResultClass(winner);

    return(
        <div className="play-container">
            <div className="player">
                <p className="text">YOUR CHAMPION:</p>
                {playerIcon}
            </div>
            <div className="player">
                <p className="text">CPU CHAMPION:</p>
                {cpuIcon}
            </div>
            <Result message={resultMessage} resultClass={resultClass} />
            <Link to="/">
                <button className="footer btn">PLAY AGAIN</button>
            </Link>

        </div>
    )
}
export default Play;