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
            square.innerHTML = `<p class="signs">X</p>`;
        });
    });
    return {
        gameboard
    };
})();

const player = (name,sign) =>{
    const getName = () => name;
    const getSign = () => sign;
    {return getName,getSign};
};

const game = (()=>{
    const player1 = player('player 1','X');
    const player2 = player('player 1','0');

    let currentplayer = player1;
    let remainingmoves = 9;

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
    function nextplayer(){
    this.currentplayer = player1?this.currentplayer = player2:this.currentplayer = player1
    };
})();