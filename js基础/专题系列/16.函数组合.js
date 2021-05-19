// 1、首先，单独拿出来说++i和i++，意思都是一样的，就是i=i+1。
// 2、如果当做运算符来说，就是a=i++或者a=++i这样的形式。情况就不一样了。
// 先说a=i++，这个运算的意思是先把i的值赋予a，然后在执行i=i+1；
// 而a=++i，这个的意思是先执行i=i+1，然后在把i的值赋予a；
// 举个例子来说，如果一开始i=4。那么执行a=i++这条语句之后，a=4，i=5；
// 那么执行a=++i这条语句之后，i=5，a=5；
// 同理，i--和--i的用法也是一样的。
var k = 1;
    a = k++
    console.log(a);
var k = 1;
    a = ++k
    console.log(a);
console.log('---------------');
// 作者：顺其自然的活着
// 链接：https://www.zhihu.com/question/19811087/answer/207494860
var i = 4;
// // i--是先取值后减，
// 判断的时候用i，判断完，i-1,执行大括号里的代码
// while(i--) {
//     console.log(i);
// }
// i--  即 i = i - 1

// --i先减后取值
// i先减去1再进行判断，判断完，执行大括号里的代码。
while(--i) {
    console.log(i);
}

var a=0,b=0;
 function A(a){
    A = function(b){alert(a + b++)}
    alert(a++);
 }
 A(1);
 A(2);
