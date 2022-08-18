/**
 * @param {number[]} digits
 * @return {number[]}
*/

var plusOne = function(digits) {
    return [...String(BigInt(digits.reduce((a,b) => a + String(b), '')) + BigInt(1))]
};
