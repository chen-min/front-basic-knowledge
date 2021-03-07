/**
 * Web Worker
 * 在火狐中可以直接打开测试，在 Chrome 中需要起服务器
 */
 var i = 0;

 function timedCount() {
     i = i + 1;
 
     console.log('window 对象为:', typeof window)
     console.log('global 对象为:', typeof global)
     console.log('self 对象为：', self)
     console.log('self.window 对象为：', self.window)
    //  var root = (typeof window == 'object' && window.window == window && window) ||
    //             (typeof global == 'object' && global.global == global && global);
    var root = (typeof self == 'object' && self.self == self && self) ||
           (typeof global == 'object' && global.global == global && global);
     console.log(root)
     postMessage(i);
     setTimeout("timedCount()", 2000);
 }
 
 timedCount();