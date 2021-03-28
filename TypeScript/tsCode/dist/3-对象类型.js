var a = {};
var arr = [1, 2, 3];
var d1 = new Date();
// 字面量形式
var person = {
    username: 'wang',
    age: 222,
};
// interface Person {
//     userName: string;
// }
// let user: Person = {userName: 'wangshihao'}
var Person = /** @class */ (function () {
    function Person(username, age) {
        this.username = username;
        this.age = age;
    }
    return Person;
}());
var personA = new Person('wangshi', 26);
