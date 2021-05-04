import RockImg from '../img/rock.png';
import { Button } from '@material-ui/core';

function rock(props) {
    return (
        <div>
            <Button onClick={props.onChoose}>
                <img src={RockImg} width={100} height={100}></img>
            </Button>
        </div>

    )
}

export default rock;