// 
/* 递归 
 * 遍历数组，将非数组元素push进一个新数组中arr，
 * 若为数组的元素进行递归，返回的数组与之前的进行合并(concat)
 * 
 * */

function flatten(arr) {
    if (!Array.isArray(arr)) return;
    var result = [];

    arr.forEach((item, index) => {
        // const temp = Object.prototype.toString.call(item) === '[object Array]' ? result.concat(flatten(arr)) : item
        // 递归不是传arr，而是item
        // // const temp = Object.prototype.toString.call(item) === '[object Array]' ? flatten(arr) : item
        // result.push(temp);

        // const temp = Object.prototype.toString.call(item) === '[object Array]' ? flatten(item) : item
        // result.push(temp); // push不行
        if(Array.isArray(item)) {
            result = result.concat(flatten(item))
        } else {
            result = result.push(item)
            // result = result.concat(item) // 也行
        }
    })
    return result;
}
// var list = [[1, 2], [3, 4,[5, 6]]]
// console.log(flatten(list));

// var arr = [1, '1', 2, '2'];

// function flatten(arr) {
//     return arr.toString().split(',').map(function(item){
//         return +item
//     })
// }

// console.log(flatten(arr))

// var arr = [1, [2, [3, 4]]];

// function flatten(arr) {
//     return arr.reduce(function(prev, next){
//         return prev.concat(Array.isArray(next) ? flatten(next) : next)
//     }, [])
// }

// console.log(flatten(arr))

/**
 * 数组扁平化
 * @param  {Array} input   要处理的数组
 * @param  {boolean} shallow 是否只扁平一层
 * @param  {boolean} strict  是否严格处理元素，下面有解释
 * @param  {Array} output  这是为了方便递归而传递的参数
 * 源码地址：https://github.com/jashkenas/underscore/blob/master/underscore.js#L528
 */
 function flatten(input, shallow, strict, output) {
    // 递归使用的时候会用到output
    output = output || [];
    var idx = output.length;

    for (var i = 0, len = input.length; i < len; i++) {

        var value = input[i];
        // 如果是数组，就进行处理
        if (Array.isArray(value)) {
            // 如果是只扁平一层，遍历该数组，依此填入 output
            if (shallow) {
                var j = 0,
                    len = value.length;
                while (j < len) output[idx++] = value[j++];
            }
            // 如果是全部扁平就递归，传入已经处理的 output，递归中接着处理 output
            else {
                flatten(value, shallow, strict, output);
                idx = output.length;
            }
        }
        // 不是数组，根据 strict 的值判断是跳过不处理还是放入 output
        else if (!strict) {
            output[idx++] = value;
        }
    }

    return output;

}

console.log(flatten([1, [2, [3, 4]], 5], false, false)); // [ 1, 2, 3, 4, 5 ]