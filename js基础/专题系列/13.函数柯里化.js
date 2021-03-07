// 第一版
// var curry = function (fn) {
//     var args = [].slice.call(arguments, 1);
//     return function() {
//         var newArgs = args.concat([].slice.call(arguments));
//         return fn.apply(this, newArgs);
//     };
// };

// function add(a, b) {
//     return a + b;
// }

// var addCurry = curry(add, 1, 2);
// console.log('addCurry()', addCurry()); // 3
//或者
// var addCurry = curry(add, 1);
// addCurry(2) // 3
// //或者
// var addCurry = curry(add);
// addCurry(1, 2) // 3


// 第二版
// function sub_curry(fn) {
//     var args = [].slice.call(arguments, 1);
//     return function() {
//         return fn.apply(this, args.concat([].slice.call(arguments)));
//     };
// }

// function curry(fn, length) {
//     length = length || fn.length;
//     var slice = Array.prototype.slice;

//     return function() {
//         if (arguments.length < length) {
//             var combined = [fn].concat(slice.call(arguments));
//             return curry(sub_curry.apply(this, combined), length - arguments.length);
//         } else {
//             return fn.apply(this, arguments);
//         }
//     };
// }
// var fn = curry(function(a, b, c) {
//     return [a, b, c];
// });

// console.log(fn("a", "b", "c")); // ["a", "b", "c"]
// console.log(fn("a", "b")("c")); // ["a", "b", "c"]
// fn("a")("b")("c") // ["a", "b", "c"]
// fn("a")("b", "c") // ["a", "b", "c"]
// 为了让大家更好的理解这个 curry 函数，我给大家写个极简版的代码：

function sub_curry(fn){
    return function(){
        return fn()
    }
}

function curry(fn, length){
    length = length || 4;
    return function(){
        if (length > 1) {
            return curry(sub_curry(fn), --length)
        }
        else {
            return fn()
        }
    }
}

var fn0 = function(){
    console.log(1)
}

var fn1 = curry(fn0)

fn1()()()() // 1

// function curry(fn, args) {
//     var length = fn.length;
//     args = args || [];

//     return function() {
//         var _args = args.slice(0),
//             arg, i;
//         for (i = 0; i < arguments.length; i++) {
//             arg = arguments[i];
//             _args.push(arg);
//         }
//         if (_args.length < length) {
//             return curry.call(this, fn, _args);
//         }
//         else {
//             return fn.apply(this, _args);
//         }
//     }
// }


// var fn = curry(function(a, b, c) {
//     console.log([a, b, c]);
// });

// fn("a", "b", "c") // ["a", "b", "c"]
// fn("a", "b")("c") // ["a", "b", "c"]
// fn("a")("b")("c") // ["a", "b", "c"]
// fn("a")("b", "c") // ["a", "b", "c"]