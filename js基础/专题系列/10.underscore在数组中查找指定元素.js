
Array.prototype._findIndex = function(callback) {
    let result = -1;
    console.log('this', this);
    for(let i = 0; i < this.length; i++) {
        if (callback(this[i])) {
            result = i;
            break
        }
    }
    return result;
}
const res = [1, 2, 3, 444,666]._findIndex((item) => {
    return item > 300
})
console.log('res', res);

function findLastIndex(array, callback, context) {
    var len = array.length;
    for(var i = len - 1; i >= 0; i--) { // 边界值包括 i==0
        if(callback.call(context, array[i], i, array)) return i;
    }
    return -1;
}
console.log(findLastIndex([1, 2, 4, 5, 6, 3], (item, index, arr) => {
    return item > 3;
}));



// function findLastIndex(array, predicate, context) {
//     var length = array.length;
//     for (var i = length - 1; i >= 0; i--) {
//         if (predicate.call(context, array[i], i, array)) return i;
//     }
//     return -1;
// }

// console.log(findLastIndex([1, 2, 3, 4], function(item, index, array){
//     if (item > 1) return true; // 3
// })) // 3