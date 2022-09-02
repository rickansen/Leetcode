/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
*/

var setZeroes = function(matrix) {
    let coordinates = matrix.map( (x,y) => x.map( (a,b) => a === 0 ? b : ''))
    let  coordinatesVal = coordinates.reduce((a,b) => a.concat(b)).filter(x => x !== '')

    for (let i = 0;  i < matrix.length; i++) {
        for (let j = 0;  j < matrix[0].length; j++) {
            if (coordinates[i].some(a => a !== '')) {
                matrix[i][j] = 0
            } else if (coordinatesVal.includes(j)) {
                matrix[i][j] = 0
            }
        }
    }
    
};

