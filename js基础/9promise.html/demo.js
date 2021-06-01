Promise是es提出的一种处理异步问题的解决方案。
本身是一个构造函数，该函数接受一个函数fn作为参数。fn接受2个方法作为参数，
一个resolve方法、一个reject方法，可将异步操作得到的结果抛出去。

promise实例的then方法，有2个参数一个成功的回调，一个是失败的回调。可得到异步处理的结果。
实例的另一个方法 catch 


promise 常见的api
promise.all是等待所有的promise都触发成功了，才会返回，
而race有一个成功了就会返回结果。其中任何一个promise执行失败了，都会直接返回失败的结果。

回调地狱：https://www.pianshen.com/article/723146332/