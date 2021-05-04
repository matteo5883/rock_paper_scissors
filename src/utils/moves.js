export const checkWin = (firstUser, secondUser) => {
    
    if(firstUser === 'ROCK') {
        if( secondUser === 'SCISSORS') return 'WIN';
        else if( secondUser === 'PAPER') return 'LOOSE';
        else return 'DRAW';
    } else if (firstUser === 'PAPER') {
        if(secondUser === 'ROCK') return 'WIN';
        else if(secondUser === 'SCISSORS') return 'LOOSE';
        else return 'DRAW';
    } else {    //SCISSORS
        if(secondUser === 'PAPER') return 'WIN';
        else if(secondUser === 'ROCK') return 'LOOSE';
        else return 'DRAW';
    }
}

export const cpuMove = () => {
    const random = Math.floor(Math.random() * 3);
    switch (random){
        case 0: return 'SCISSORS';
        case 1: return 'PAPER';
        case 2: return 'ROCK';
        default: return 'ERROR';
    }
}