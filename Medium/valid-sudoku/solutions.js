/**
 * @param {character[][]} board
 * @return {boolean}
 */

var isValidSudoku = function(board) {
    let hor = [[],[],[],[],[],[],[],[],[]]
    let vert = [[],[],[],[],[],[],[],[],[]]
    let reg = [[[],[],[]],[[],[],[]],[[],[],[]]]
    for (var i=0;i<9;i++){
      for (var j=0;j<9;j++){
        hor[i].push(board[i][j])
        vert[j].push(board[i][j])
        reg[Math.floor(i/3)][Math.floor(j/3)].push(board[i][j])
      }
    }

    hor = hor.map(x => x.filter(x => x !== '.')).map(x => new Set(x).size === x.length).every(x => x === true)
    vert = vert.map(x => x.filter(x => x !== '.')).map(x => new Set(x).size === x.length).every(x => x === true)
    reg = reg.map(x => x.map(a => a.filter(a => a !== '.'))).map(x => x.map(a => a.length === new Set(a).size).every(a => a === true)).every(x => x === true)

    return hor && vert && reg
};
