/**
 * @param {number} x
 * @return {number}
*/

var reverse = function(x) {
    let bit = 2 ** 31
    let rev = [...String(Math.abs(x))].reverse().join('')
    let final = x > 0 ? +rev : -rev
    return final > bit || final < -(bit) ? 0 : final
}