var $ = require('./jquery-3.6.0');
// console.log('$', $);
// console.log('$', $.each);
// console.log('$', $.extend);
// 遍历数组
// var test = $.each( [0,1,2], function(i, n){
//     console.log( "Item #" + i + ": " + n );
// });
// console.log('test', test);
// Item #0: 0
// Item #1: 1
// Item #2: 2

// 遍历对象
// $.each({ name: "John", lang: "JS" }, function(i, n) {
//     console.log("Name: " + i + ", Value: " + n);
// });
// Name: name, Value: John
// Name: lang, Value: JS

// $.each( [0, 1, 2, 3, 4, 5], function(i, n){
//     if (i > 2) return false;
//     console.log( "Item #" + i + ": " + n );
// });

// Item #0: 0
// Item #1: 1
// Item #2: 2


function myEach(obj, callback) {
    if(Array.isArray(obj)) {
        for(var i = 0; i < obj.length; i++) {
            var res = callback(i, obj[i]);
            if(res === false) return;
        }
    } else if(Object.prototype.toString.call(obj) === '[object Object]') {
        for(var key in obj) {
            var res = callback(key, obj[key]);
            if(res === false) return;
        }
    }
}
myEach([1, 3, 4], (index, item) => {
    console.log(`index:${index} item: ${item}`);
    return item > 1
})
myEach({
    name: 'Tom',
    gender: 'male'
}, (index, item) => {
    console.log(`index:${index} item: ${item}`);
})
// var arr = Array.from({length: 1000000}, (v, i) => i);

var arr = Array.from({length: 5}, (item, i) => i);
console.log(arr);
