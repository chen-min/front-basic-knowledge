// // // let str: string = 'kkb';

// // // class User {
    
// // //     constructor(
// // //         public username: string
// // //     ) {

// // //     }

// // // }

// // // str.push();


// // // let obj1: object = {
// // //     x: 1
// // // };

// // // let a = 1;
// // // type a = 'string';

// // // console.log(a);
// // // let v: a;

// // // type user = {
// // //     username: string,
// // //     age: number
// // // }

// // type t = string | number;

// // interface user {
// //     username: string,
// //     age: number
// // }
// // interface user {
// //     gender: string
// // }

// // function fn(arg: user) {

// // }

// // fn({
// //     username: '',
// //     age: 1,
// //     gender: '男'
// // })

// interface T {
//     [x: string]: number|string;
// }

// let o: T;

// o.x = 1;
// o.y = 2
// o.z = 1;
// o.t = 'a';


// let a = 1;


// function fn(arg: string|number) {
//     // arg.substring(1);

//     if ( typeof arg === 'string' ) {
//         arg.substring(1);
//     } else {
//         arg.toFixed(1);
//     }

// }

let p1 = {
    name: 'zMouse',
    age: 35
}

type T = typeof p1;
type K = keyof T;

function getVal(key: keyof typeof p1) {
    return p1[key];
}

getVal('name');

let obj: T = {
    name: '',
    age: 1
}
