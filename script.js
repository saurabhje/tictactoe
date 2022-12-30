
const Gameboard = (()=>{
    let gameboard = [];
    for(let i = 0;i<9;i++){
        gameboard.push('');
    };
    const board = document.querySelector('.grids');
    gameboard.forEach((item,index)=>{
        const squares = document.createElement('div');
        squares.classList.add('square');
        board.appendChild(squares);
    }); 

    Array.from(board.children).forEach((square,index) =>{
        square.addEventListener('click',()=>{
                if(game.winnerdeclared === false) {       
                square.innerHTML = `<p>${game.currentplayer.sign}</p>`;
                square.setAttribute('data', game.currentplayer.sign);
                gameboard[index] = game.currentplayer.sign;
                square.style.pointerEvents = 'none';
                game.remainingmoves -= 1;
                game.checkwinner();
                if (game.winnerdeclared == false) {
                    if (game.remainingmoves > 0) {
                        game.nextPlayer();
                    } else if (game.remainingmoves == 0) {
                        game.declareTie();
                    }
                    else{
                        return;
                    }
                }
            }
        });
    });
    return {
        gameboard
    };
})();
let nongame = document.getElementsByClassName('nongame')
const player = (name, sign) => {
    return {name, sign};
}

const game = (()=>{
    const playerOne = player('player 1', 'X');
    const playerTwo = player('player 2', 'O');

    let currentplayer = playerOne;
    var remainingmoves = 9;
    var winnerdeclared  = false;

    const winningindex = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ];

    function checkwinner(){
        winningindex.forEach((item,index)=>{
            if(Gameboard.gameboard[item[0]]===this.currentplayer.sign && Gameboard.gameboard[item[1]]
            ===this.currentplayer.sign && Gameboard.gameboard[item[2]] === this.currentplayer.sign){
                this.winnerdeclared = true;
                let winner = document.querySelector('.winner')
                winner.innerHTML=`<p>${this.currentplayer.sign} is winner</p>`
                index = 1;
                console.log('winner');
            }
        });
    }
    function nextPlayer() {
        this.currentplayer === playerOne ? this.currentplayer = playerTwo : this.currentplayer = playerOne;
        console.log('nextPlayer() function ran')
        console.log('active player: ' + this.currentplayer.name);
    }

    function declareTie() {
        nongame.innerHTML = "<p>Tie game!</p>";
    }
    return {
        nextPlayer,
        declareTie,
        checkwinner,
        currentplayer,
        winnerdeclared,
        remainingmoves,
    };
})();
