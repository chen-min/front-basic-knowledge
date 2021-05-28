// function add (a) {
//     return b => {
//         return c => {
//             return a + b + c
//         }
//     }
// }
// const res = add(1)(2)(3);
// console.log('res: ', res);

const add = a => b => c => a + b + c;
const res = add(1)(2)(3);
console.log('res: ', res);