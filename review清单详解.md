为什么背题没有用，举个例子，“从输入 URL 到页面渲染中间发生什么” 这是一个老生常谈的问题，有些候选人回答这个问题感觉一看就是准备过的，但是一细问都会露馅，比如 TCP 的三次握手，每次发了回了什么样的包？浏览器解析文档过程中，遇到外链的 JS，会不会阻塞渲染，遇到外链的 CSS，会不会阻塞渲染，如果阻塞了，原因是什么，如果没阻塞，原因又是什么？一道题的背后，往往蕴含着非常多的知识点，如果你知识走马观花似地只背大致流程，意义并不是很大。

作者：黄轶
链接：https://juejin.cn/post/6964658454543728647
来源：掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。



##for in和for of区别?
JavaScript 原有的`for...in`循环，只能获得对象的键名，不能直接获取键值。ES6 提供`for...of`循环，允许遍历获得键值。

```javascript
var arr = ['a', 'b', 'c', 'd'];

for (let a in arr) {
  console.log(a); // 0 1 2 3
}

for (let a of arr) {
  console.log(a); // a b c d
}
```

上面代码表明，`for...in`循环读取键名，`for...of`循环读取键值。如果要通过`for...of`循环，获取数组的索引，可以借助数组实例的`entries`方法和`keys`方法（参见《数组的扩展》一章）。

`for...of`循环调用遍历器接口，数组的遍历器接口只返回具有数字索引的属性。这一点跟`for...in`循环也不一样。

```javascript
let arr = [3, 5, 7];
arr.foo = 'hello';

for (let i in arr) {
  console.log(i); // "0", "1", "2", "foo"
}

for (let i of arr) {
  console.log(i); //  "3", "5", "7"
}
```

上面代码中，`for...of`循环不会返回数组`arr`的`foo`属性。

###lodash
#### pick
const vaildFileds = _.pick(info, [
            'name',
            'doctorId',
            'weight',
            'departmentText',
            'specialityText',
            'regionId',
            'title',
            'speciality',
            'bindstat',
            'avatar',
            'astat',
            'openTime',
            'isMain'
        ]);



## 新技术

新技术

### Vue3.0

### React17.0

### Webpack5

### serverless,

### WebAssembly, 

### deno

### electron

### Vite

Vite，一个基于浏览器原生 ES imports 的开发服务器。利用浏览器去解析 imports，在服务器端按需编译返回，完全跳过了打包这个概念，服务器随起随用。同时不仅有 Vue 文件支持，还搞定了热更新，而且热更新的速度不会随着模块增多而变慢。针对生产环境则可以把同一份代码用 rollup 打。虽然现在还比较粗糙，但这个方向我觉得是有潜力的，做得好可以彻底解决改一行代码等半天热更新的问题。

https://www.zhihu.com/question/394062839/answer/1496127786

WebAssembly是一种新的字节码格式。目前，主流浏览器支持WebAssembly。与JS的解释和执行不同，WebAssembly字节码与底层机器代码非常相似，可以快速加载和运行，因此性能比JS解释和执行有了很大提高。也就是说，WebAssembly不是一种编程语言，而是一种字节码标准，需要用高级编程语言编译并放入WebAssembly虚拟机中运行。浏览器制造商需要做的是根据WebAssembly规范实现虚拟机。使用WebAssembly，您可以在浏览器上运行任何语言。从Javascript到TypeScript到Babel，这些都需要翻译成js来执行，而WebAssembly嵌入在浏览器中，不需要翻译就可以直接执行，所以执行效率自然要高得多。

Hrome的核心JavaScript引擎V8现在包括了Liftoff，一个新的WebAssembly baseline编译器。Liftoff简单快速的代码生成器大大提高了WebAssembly应用程序的启动速度。2019年，许多公司将开始投资于网络组装的学习和转型。据信，网络组装将在2020年经历一个爆炸性时期。