// const player = prompt("Are you 'x' or Are you 'o'")
// if(player == 'x'){
//     var computer = 'o'
// }else{
//     var computer = 'x'
// }
// console.log(player)
// console.log(computer)
// function gameBoard(){
//     const board = ["0","1","2","3","4","5","6","7","8"]
//     let gameOver = false
//     while (!gameOver){
//         for( let i = 0; i<9; i++){
//             var index = prompt("What tile do you choose")
//             while (index > 8 || index < 0 || board[index]=="x" || board[index]=="o"){
//                 let index = prompt("What tile do you choose")
//             }
//             board[index] = player
//             console.log(board)
//             if((board[0]===board[4] && board[4]===board[8]) ||(board[0]===board[1] && board[1]===board[2]) ||(board[0]===board[3] && board[3]===board[6]) ||(board[8]===board[5] && board[5]===board[2]) ||(board[8]===board[7] && board[7]===board[6]) ||(board[2]===board[4] && board[4]===board[6]) ||(board[1]===board[4] && board[4]===board[7]) ||(board[3]===board[4] && board[4]===board[5]))
//             {
                
//                 gameOver = true
//                 var lastPlayed = board[index]
//                 break
                
//             }
//             index = Math.floor(Math.random()*9)
//             console.log(index)
//             while(!board.includes(String(index))){
//                 index = Math.floor(Math.random()*9)
//             }
//             board[index] = computer
//             console.log(board)
//             if((board[0]===board[4] && board[4]===board[8]) ||(board[0]===board[1] && board[1]===board[2]) ||(board[0]===board[3] && board[3]===board[6]) ||(board[8]===board[5] && board[5]===board[2]) ||(board[8]===board[7] && board[7]===board[6]) ||(board[2]===board[4] && board[4]===board[6]) ||(board[1]===board[4] && board[4]===board[7]) ||(board[3]===board[4] && board[4]===board[5]))
//             {
                
//                 gameOver = true
//                 var lastPlayed = board[index]
//                 break
                
//             }
//         }
//     }
//     console.log(`GameOver ${lastPlayed} Wins`)

// }
// gameBoard()
function checkGameWinner(board){
    return ((board[0]===board[4] && board[4]===board[8]) ||(board[0]===board[1] && board[1]===board[2]) ||(board[0]===board[3] && board[3]===board[6]) ||(board[8]===board[5] && board[5]===board[2]) ||(board[8]===board[7] && board[7]===board[6]) ||(board[2]===board[4] && board[4]===board[6]) ||(board[1]===board[4] && board[4]===board[7]) ||(board[3]===board[4] && board[4]===board[5]))
}
var tic_tac_toe = {
    player : "x",
    gameBoard : ["0","1","2","3","4","5","6","7","8"],
    gameOver : false,
    lastPlayed : "",
    playX : function(){
        const index = prompt("Where to play")
        this.gameBoard[index] = this.player
        this.lastPlayed = this.player
        this.checkGameOver()
    },
    playY : function(){
        const index = prompt("Where to play")
        this.gameBoard[index] = this.player
        this.lastPlayed = this.player
        this.checkGameOver()
    },
    checkGameOver : function(){
        for(let i = 0; i<9; i++){
            if (checkGameWinner(this.gameBoard)){
                alert("GameOver"`${this.lastPlayed}`,"is the winner")
            }
            if(i == 8){
                alert("GameOver","No winner")
            }
        }
    }
}
