function* range(start, stop, step) {
    if (typeof stop == 'undefined') {
        // one param defined
        stop = start;
        start = 0;
    }

    if (typeof step == 'undefined') {
        step = 1;
    }

    if ((step > 0 && start >= stop) || (step < 0 && start <= stop)) {
        return [];
    }

    // var result = [];
    // for (var i = start; step > 0 ? i < stop : i > stop; i += step) {
    //     result.push(i);
    // }
    // return result; 
    for (let i = start; step > 0 ? i < stop : i > stop; i += step) {
        yield i;
    }
};

function zip(arrays) {
    return arrays[0].map(function(_,i){
        return arrays.map(function(array){return array[i]})
    });
};

export {range,zip}
// export default range
