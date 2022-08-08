/**
 * @param {string} s
 * @return {boolean}
 */

var checkValidString = function(s) {
    while (s.includes('(') && s.includes(')')) {
        s = s.replace('(', '')
        s = s.replace(')', '')
    }

    let star = s.split('').filter(x => x === '*').length
    let symb = s.split('').filter(x => x === ')' || x === '(').length

    if (s === '(' || s === ')') return false
    return!s || s === '*' || star >= symb
};

console.log(
    checkValidString("(*)"), true)

console.log(
    checkValidString("(*))"), true)

console.log(
    checkValidString(
    "((((()(()()()*()(((((*)()*(**(())))))(())()())(((())())())))))))(((((())*)))()))(()((*()*(*)))(*)()"), true)

console.log(
    checkValidString("(((((()*)(*)*))())())(()())())))((**)))))(()())()"), false)

console.log(
    checkValidString("(((((*(()((((*((**(((()()*)()()()*((((**)())*)*)))))))(())(()))())((*()()(((()((()*(())*(()**)()(())"), false)


