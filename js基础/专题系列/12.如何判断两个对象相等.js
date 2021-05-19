// NaN 和 NaN 是相等
// [1] 和 [1] 是相等
// {value: 1} 和 {value: 1} 是相等
// 不仅仅是这些长得一样的，还有

// 1 和 new Number(1) 是相等
// 'Curly' 和 new String('Curly') 是相等
// true 和 new Boolean(true) 是相等

console.log('Curly' == new String('Curly'));
console.log('Curly' == ['Curly']);