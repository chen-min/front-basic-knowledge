
https://zhuanlan.zhihu.com/p/99342755

ES7
1.Array.prototype.includes() 方法
const arr = [1, 3, 5, 2, '8', NaN, -0]
arr.includes(1) // true
arr.includes(1, 2) // false 该方法的第二个参数表示搜索的起始位置，默认为 0
arr.includes('1') // false
arr.includes(NaN) // true
arr.includes(+0) // true

在 ES7 之前想判断数组中是否包含一个元素，有如下两种方法, 但都不如 includes 来得直观：
indexOf
find() 和 findIndex()
数组实例的 find 方法，用于找出第一个符合条件的数组成员。另外，这两个方法都可以发现 NaN，弥补了数组的 indexOf 方法的不足。

[1, 4, -5, 10].find((n) => n < 0) // -5
[1, 5, 10, 15].findIndex(function(value) {
  return value > 9;
}) // 2
[NaN].findIndex(y => Object.is(NaN, y)) // 0

2.求幂运算符 **（指数运算符）
console.log(2**10);// 输出 1024zhicc
console.log(Math.pow(2, 10)) // 输出 1024


2.Object.values()，Object.entries()

Object.values 方法返回一个数组，成员是参数对象自身的（不含继承的）所有可遍历（enumerable）属性的键值。

const obj = { foo: 'bar', baz: 42 };
Object.values(obj) // ["bar", 42]
const obj = { 100: 'a', 2: 'b', 7: 'c' };
Object.values(obj) // ["b", "c", "a"]

需要注意的是，如果属性名为数值的属性，是按照数值大小，从小到大遍历的，因此返回的顺序是 b、c、a。

Object.entries() 方法返回一个数组，成员是参数对象自身的（不含继承的）所有可遍历（enumerable）属性的键值对数组。
const obj = { foo: 'bar', baz: 42 };
Object.entries(obj) // [ ["foo", "bar"], ["baz", 42] ]
const obj = { 10: 'xxx', 1: 'yyy', 3: 'zzz' };
Object.entries(obj); // [['1', 'yyy'], ['3', 'zzz'], ['10': 'xxx']]

3.String padding
在 ES8 中 String 新增了两个实例函数 String.prototype.padStart 和 String.prototype.padEnd，允许将空字符串或其他字符串添加到原始字符串的开头或结尾。我们先看下使用语法：

String.padStart(targetLength,[padString])
targetLength(必填): 当前字符串需要填充到的目标长度。如果这个数值小于当前字符串的长度，则返回当前字符串本身。
padString(可选): 填充字符串。如果字符串太长，使填充后的字符串长度超过了目标长度，则只保留最左侧的部分，其他部分会被截断，此参数的缺省值为 " "。
'x'.padStart(4, 'ab') // 'abax'
'x'.padEnd(5, 'ab') // 'xabab'
有时候我们处理日期、金额的时候经常要格式化，这个特性就派上用场：

'12'.padStart(10, 'YYYY-MM-DD') // "YYYY-MM-12"
'09-12'.padStart(10, 'YYYY-MM-DD') // "YYYY-09-12"
