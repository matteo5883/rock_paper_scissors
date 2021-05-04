import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faHandRock,
    faHandPaper,
    faHandScissors,
} from '@fortawesome/free-regular-svg-icons';
import './_HomePage.scss';
import { NavLink as Link } from 'react-router-dom';


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
                    <FontAwesomeIcon
                        className="icon-rock"
                        icon={faHandRock}
                        float="left"
                    />
                </Link>
                <Link to={{
                    pathname: "/play",
                    state: {
                        selected: "PAPER"
                    }
                    }}>
                    <FontAwesomeIcon
                        className="icon-paper"
                        icon={faHandPaper}
                        float="right"
                        />
                </Link>
            </div>
                
            <div className="">
                <Link to={{
                    pathname: "/play",
                    state: {
                        selected: "SCISSORS"
                    }
                    }}>
                    <FontAwesomeIcon
                        className="icon-scissors"
                        icon={faHandScissors}
                    />
                </Link>
            </div>
        </div>
    )
}
export default Homepage;