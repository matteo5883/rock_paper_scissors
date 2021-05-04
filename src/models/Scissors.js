import ScissorsImg from '../img/scissors.png';
import {Button} from '@material-ui/core';

function Scissors(props) {
    return (
        <div>
            <Button onClick={props.onChoose}>
                <img src={ScissorsImg} height={100} width={100}></img>
            </Button>
            
            
        </div>
    )
}

export default Scissors;