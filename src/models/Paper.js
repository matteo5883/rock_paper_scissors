import PaperImg from '../img/paper.png';
import { Button } from '@material-ui/core';

function Paper(props) {

    return (
        <div>
            <Button onClick={props.onChoose}>
                <img src={PaperImg} width={100} height={100}></img>
            </Button>
        </div>
    )
}

export default Paper;