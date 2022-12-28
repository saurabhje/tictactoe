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
            square.innerHTML = `<p>${game.player1.sign}</p>`;
            square.setAttribute('data', game.currentplayer.sign);
            console.log(square.sign)
            gameboard[index] = game.currentplayer.sign;
            square.style.pointerEvents = 'none';
            game.remainingSpots -= 1;
            game.checkwinner();
            if (game.winnerdeclared == false) {
                if (game.remainingSpots > 0) {
                    game.nextplayer();
                } else if (game.remainingSpots == 0) {
                    game.declareTie();
                }
            }
        });
    });
    return {
        gameboard
    };
})();

const player = (name,sign) =>{

    {return name,sign};
};

const game = (()=>{
    const player1 = player('player 1','X');
    const player2 = player('player 1','O');

    let currentplayer = player1;
    let remainingmoves = 9;
    let winnerdeclared  = false;

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
                console.log('winner');
                return;
            }
        });
    }
    function nextplayer() {
        this.currentplayer === player1 ? this.currentplayer = player2 : this.currentplayer = player1;
        console.log('nextPlayer() function ran')
        console.log('active player: ' + currentplayer.name);
    }
    function declareTie() {
        subtext.innerHTML = "<b>Tie game!</b>";
    }
    return {
        player1,
        nextplayer,
        checkwinner,
        currentplayer,
        winnerdeclared,
        remainingmoves,
    };
})();