let inputs = document.querySelectorAll('input');
let button = document.querySelector('button');
let span = document.querySelector('span');

button.onclick = function() {
    // 数据的类型安全
    let result: number = Number(inputs[0].value) + Number(inputs[1].value);

    span.innerHTML = result.toString();
}


function fn(x: number, y: number): number {
    return x + y;
}

fn(1, 2);