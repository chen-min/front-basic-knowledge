// 疑问
var min = Math.min();
var max = Math.max();
console.log(min > max);

// 方法1、for循环遍历数组
// 方法2、reduce方法
// 方法3、排序
// 4. eval函数

// 1
var arr = [6, 4, 1, 8, 2, 11, 23];
var maxValue = arr[0];
for (var i = 1, len = arr.length; i < len; i++) {
    maxValue = Math.max(maxValue, arr[i])
}
console.log('maxValue', maxValue);

// 2
function findMax(pre, current) {
    return Math.max(pre, current)
}

var arr = [33,44,2,55,999];
const result = arr.reduce(findMax);
console.log('result', result);

// 3
let sortedArr = arr.sort((a, b) => a - b);
console.log(sortedArr[sortedArr.length - 1]);

// 4
var arr = [6, 4, 1, 8, 2, 11, 23];

var max = eval("Math.max(" + arr + ")");
console.log(max)