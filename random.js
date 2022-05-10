

/**
 * 
 * @param {Number} min 
 * @param {Number} max 
 * @returns min（包含）～ max（包含）之间的数字：
 */
function randint(min, max) {
    // if(typeof max == 'undefined'){
    //     max=min;
    //     min=0;
    // }
    return Math.floor(Math.random() * (max + 1 - min)) + min;
}
var seed = 5;
const seededRandom = function (min, max) {
    max = max || 1;
    min = min || 0;
    seed = (seed * 9301 + 49297) % 233280;
    var rnd = seed / 233280.0;
    return min + rnd * (max - min);
};
/**
 * 
 * @param {Number} n 必须的。一个数字，指定返回整数的大小（以位为单位）。
 * @return {Number} 指定大小的整数（以位为单位）。
 */
function getrandbits(n) {
    if (typeof n == 'undefined')
        throw new TypeError('getrandbits() takes exactly 1 argument (0 given)')
    if (typeof n != 'number')
        throw new TypeError('an integet is required, (got type ' + typeof n + ')')
    if (!Number.isInteger(n))
        throw new TypeError('integer argument expected, got float')
    if (n <= 0)
        throw new Error('number of bits must be greater than zero')
    return randint(0, Math.pow(2, n) - 1)
}
/**
 * 
 * @param {Array} sequence 序列，如列表、元组、数字范围等。
 * @return 指定序列中随机选择的元素。
 */
function choice(sequence) {
    if (sequence[Symbol.iterator] == undefined)
        throw new TypeError('sequence not iteratorable')
    if (sequence.length == 0)
        throw new Error('Cannot choose from an empty sequence')
    return sequence[randint(0, sequence.length - 1)]
}
/**
 * 
 * @param {*} sequence 必须的。序列，如列表、元组、数字范围等。
 * @param {*} weights 可选。一份清单，你可以衡量每个值的可能性。默认无。
 * @param {*} cum_weights 可选。列表：您可以对每个值的可能性进行加权，但这一次可能性是累积的。例如：正常权重列表：[2,1,1]与此累计权重列表相同；[2,3,4]。默认为无。
 * @param {*} k 可选。定义返回列表长度的整数。
 */
function choices(sequence, weights = None, cum_weights = None, k = 1) { }
/**
 * 获取一个序列，如列表，并重新组织项的顺序。
 * 注意：此方法更改原始列表，但不返回新列表。
 * @param {*} sequence 必须的。序列。
 * @param {*} func 可选。返回介于0.0和1.0之间的数字的函数名。如果未指定，将使用函数 random()
 */
function shuffle(sequence, func) {
    if (sequence[Symbol.iterator] == undefined)
        throw new TypeError('sequence not iteratorable')
    if (sequence.length == 0)
        throw new Error('Cannot choose from an empty sequence')
    func = func || Math.random
    var p=0,temp
    for (let i = sequence.length - 1; i >= 0; i--) {
        p = Math.floor(func() * (i + 1))
        temp=sequence[i]
        sequence[i]=sequence[p]
        sequence[p]=temp

    }
}
// var nums=[1,2,3,4,5]
// shuffle(nums)
// console.log(nums);
export { randint, seed, seededRandom, getrandbits, choice, shuffle }
