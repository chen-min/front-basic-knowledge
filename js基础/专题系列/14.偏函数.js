function add(a, b) {
//  console.log('a + b', a + b);
    return a + b
}

// add(1, 2);
// var addOne = partial(add, 1);

// 1.bind
// var addOne = add.bind(null, 1)
// 2.
// function partial(fn) {
//     var args = [].slice.call(arguments, 1);
//     console.log(args);
//     return function() {
//         var newArgs = args.concat([].slice.call(arguments));
//         console.log('newArgs2222', newArgs);
//         return fn.apply(this, newArgs)
//     }
// }
// var addOne = partial(add, 1);

// 支持占位符
var _ = {};
// 思路，遍历外层arguments，判断参数是否为_,如果是，则取sub20函数传入
// 的第0个，position递增，直到取完，  
// 其余参数，如果positon 小于内层函数arguments长度，继续push其余参数
function partial(fn) {
    var args = [].slice.call(arguments, 1);
    console.log('args1', args);
    return function() {
        var position = 0, len = args.length;
        for(var i = 0; i < len; i++) {
            args[i] = args[i] === _ ? arguments[position++] : args[i]
        }
        while(position < arguments.length) {
            args.push(arguments[position++])
        }
        console.log('args', args);
        return fn.apply(this, args);
    }
}
var sub = function(a, b) {return b - a};
var sub20 = partial(sub, _, 20);
console.log('sub20(5)', sub20(5, 2000));
// console.log(addOne(2));


function partialEs6(fn, ...arg) {
    return function(...newArgs) {
        return fn.apply(this, [...arg, ...newArgs]);
    }
}
var addTen = partialEs6(add, 10);
console.log('addTen(9)', addTen(9));
