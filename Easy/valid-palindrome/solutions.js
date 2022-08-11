/**
 * @param {string} s
 * @return {boolean}
*/

var isPalindrome = function(s) { 
    s = s.toLowerCase().replaceAll(/[^a-z\d]/ig,'')
   return [...s].reverse().join('') === s
};
