// todo ???
console.log(Number("000123")) // 123
console.log(Number("-000123")) // -123
console.log(Number("0x11")) // 17
// 忽略前导0
console.log(parseInt("0xFF")) // 255
// 15*16 + 15 = 15 * 17 = 255
// [1].toString(); // TypeError: Cannot read property '1' of undefined

// console.log(({}).toString()) // [object Object]

console.log([].toString()) // ""
console.log([].toString() === '') // true
console.log([0].toString()) // 0
console.log([1, 2, 3].toString()) // 1,2,3
// console.log((function(){var a = 1;}).toString()) // function (){var a = 1;}
// console.log((/\d+/g).toString()) // /\d+/g
// console.log((new Date(2010, 0, 1)).toString()) // Fri Jan 01 2010 00:00:00 GMT+0800 (CST)

console.log('Number({a : 1})', Number({a : 1}).toString);
console.log([].toString());
console.log([0].toString());
console.log(Object.prototype.toString.call([]));
console.log(Object.prototype.toString.call(0));
// console.log([].toString());

var arr = ['a', 'b']
console.log(arr.toString()); 
console.log(arr.join(','));
console.log(Number([0])) // 0
console.log(function(){var a = 1;}.toString());
console.log(new Date().toString());
console.log(+[]);
console.log(+['1']);
console.log(+['1', '2', '3']);
console.log(+{});
console.log([] + []);
console.log(1 + true);
console.log({} + {});
console.log(new Date(2017, 04, 21) + 1) // 这个知道是数字还是字符串类型就行
console.log(typeof (new Date(2017, 04, 21) + 1)) // 这个知道是数字还是字符串类型就行
var a = new Date(2017, 04, 21).valueOf();
console.log(a) // 这个知道是数字还是字符串类型就行
console.log(typeof a) // 这个知道是数字还是字符串类型就行
console.log(null == null);

console.log(false == "0") // true
console.log(false == 0) // t
console.log(false == "")

console.log("" == 0)
console.log("" == [])

console.log([] == 0)