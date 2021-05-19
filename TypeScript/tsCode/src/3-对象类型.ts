let a: Object = {};
let arr: Array<number> = [1,2,3];
let d1: Date = new Date();

// 字面量形式
let person: {username: string, age: number} = {
    username: 'wang',
    age: 222,
};

// interface Person {
//     userName: string;
// }
// let user: Person = {userName: 'wangshihao'}

class Person {
    constructor(public username: string, public age: number) {

    }
}

let personA = new Person('wangshi', 26)