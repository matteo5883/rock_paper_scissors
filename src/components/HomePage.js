import './_HomePage.scss';
import { NavLink as Link } from 'react-router-dom';
import Rock from './Rock';
import Paper from './Paper';
import Scissors from './Scissors';


const Homepage = () => {

    //onClick={() => alert(checkWin('ROCK', cpuMove()))}
    return (
        <div>
            <p className="title">Choose your champion:</p>
            <div className="">
                <Link to={{
                    pathname: "/play",
                    state: {
                        selected: "ROCK"
                    }
                    }}>
                    <Rock />
                </Link>
                <Link to={{
                    pathname: "/play",
                    state: {
                        selected: "PAPER"
                    }
                    }}>
                    <Paper />
                </Link>
            </div>
                
            <div className="">
                <Link to={{
                    pathname: "/play",
                    state: {
                        selected: "SCISSORS"
                    }
                    }}>
                    <Scissors />
                </Link>
            </div>
        </div>
    )
}
export default Homepage;