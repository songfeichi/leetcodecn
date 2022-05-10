/**
 * @param {number} num
 * @return {number}
 */
var translateNum = function(num) {
    if (num < 10) {
        return 1;
    }
    if (num % 100 < 26 && num % 100 > 9) {
        return f((num / 10)>>0) + f((num / 100)>>0);
    } else {
        return f((num / 10)>>0);
    }
};
console.log(translateNum(12258));