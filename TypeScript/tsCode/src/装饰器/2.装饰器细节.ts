function c1(target: Function) {
    console.log(typeof target, target);

    // target.isTestable = true;
}
function c2(target: any, name: string) {
    console.log(typeof target, name); 
}

function c3(target: any, name: string, descriptor: PropertyDescriptor) {
    console.log(typeof target, name, descriptor);
}

function c4(target: any, name: string, descriptor: PropertyDescriptor) {
    console.log('c4', typeof target, name, descriptor);
}
function c5(target: any, name: string, index: number) {
    // name : 当前参数所在的方法
    console.log('c5', typeof target, name, index);
}

@c1
class MyClass {
    @c2
    static property1: number; // function property1

    @c2
    a: number;  // object a

    @c3
    get b() { 
        // console.log('thisbbb', this);
        return 1; // object b 描述符
    }

    @c3 
    static get c() {
        console.log('this', this);
        
        return 2; // function c 描述符
    }

    @c4
    public method1(@c5 x: number, @c5 y: number) {}
    // c4 object method1 描述符
    // c5 object method1 1
    // c5 object method1 0

    @c4
    public static method2() {}
    // c4 function method2
}




// let cls = new MyClass();
// console.dir(cls);
// cls.b;

// 描述符
//     {
//         get: [Function: get],
//         set: undefined,
//         enumerable: false,
//         configurable: true
//     }