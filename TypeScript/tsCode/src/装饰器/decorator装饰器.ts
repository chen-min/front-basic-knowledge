// function log(target: Function, name: string, descriptor: PropertyDecorator) {
function log(target: Function, name: string, descriptor: PropertyDescriptor) {
    console.log(target, name, descriptor);
    // [Function: M] { add: [Function (anonymous)] }
    // add
    //  {
    //   value: [Function (anonymous)],
    //   writable: true,
    //   enumerable: true,
    //   configurable: true
    // }
    let fn = descriptor.value;
    descriptor.value = function(a: number, b: number) {
        let result = fn(a, b);
        console.log('日志：', {
            name,
            a,
            b,
            result
        });
        return result;
    }
}



class M {
    @log
    static add(a: number, b: number) {
        return a + b
    }
}
let v1 = M.add(1, 2);
console.log(v1);
