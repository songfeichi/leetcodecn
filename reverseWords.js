/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
    var stack = []
    var ws = 0
    var n = s.length
    while (s[ws] == ' ') ws++
    var building = true
    for (var end = ws; end < n; end++) {
        if (s[end] == ' ' && building) {
            stack.push(s.slice(ws, end))
            building = false
        }
        else if (s[end] != ' ' && !building) {
            building = true
            ws = end
        }
        if(end==n-1 && s[end]!=' ' &&building )
            stack.push(s.slice(ws))

    }
    return stack.reverse().join(' ')
};

/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
    return s.trim().split(/\s+/).reverse().join(' ')
}
console.log(reverseWords(' the sky is blue'));
