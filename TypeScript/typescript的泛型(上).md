##### 泛型（Generics）是指在定义函数、接口或类的时候，不预先指定具体的类型，而在使用的时候再指定类型的一种特性

> 这句话怎么理解？大白话就是预先定义的类型是固定的，而泛型帮我们解决的就是它可以让约定类型变成动态的，使用的时候再去定义，显然泛型可以让我们的代码可复用性更高

###### 先来一个栗子！

```
// 数组使用泛型
let arr:Array<number> = [1, 2, 3];
// 这就是泛型的写法，它等价于：
let arr2:number[] = [1, 2, 3];
```

> 我们发现泛型的写法变成了<类型>这样的形式

###### 函数配合泛型

```
function createArray(length: number, value: any): Array<any> {
    let result = [];
    for (let i = 0; i < length; i++) {
        result[i] = value;
    }
    return result;
}

createArray(2, 'A'); // ['A', 'A'];
```
> 上面这段代码上面意思？在函数形参中，规定了`length`的类型为`number`，规定了`value`的类型为`any`，规定了函数的返回值必须是一个`array`，值得类型为`any`,但是这段代码的缺陷就是它的参数可以是任意值，谁调用，它的返回结果可以是任意值，如果这样，我们就失去了使用ts的意义，并且，这段函数规定了类型，因此它没有复用性

###### 函数配合泛型进阶

```
function createArray<TYPE>(length: number, value: TYPE): Array<TYPE> {
    let result: TYPE[] = [];
    for (let i = 0; i < length; i++) {
        result[i] = value;
    }
    return result;
}

createArray<string>(2, 'A'); // ['A', 'A'];
```

> 上面这段代码得意思是，函数传递一个类型string，接受一个类型的参数TYPE`这只是一个形参，不一定非要用TYPE`，这个TYPE则可以在函数内部的任意地方被当作类型来使用，给我们提供的方便就是，它是可变的，在我们使用的时候，再去决定它的参数的类型、它的返回结果的类型，这时候，这个函数的返回值是被约束的，它的复用性得到了提升

###### 当泛型不指定类型

```
function createArray<TYPE>(length: number, value: TYPE): Array<TYPE> {
    let result: TYPE[] = [];
    for (let i = 0; i < length; i++) {
        result[i] = value;
    }
    return result;
}

createArray(2, 'A'); // ['A', 'A'];
```

> 我们可以对比`泛型进阶`代码，函数调用不指定类型的时候，编译并不会报错，那我们createArray后面的<TYPE>就只相当于一个占位符，但当你初始化这个函数后，那么ts会启动类型推论，也就是说，初始化以后，返回值的类型就被固定了，当你赋值其他类型的值时，会发生编译错误

###### 泛型多个参数类型约定

```
function moreType<N, S>(result: [N, S]): [S, N] {
    return [result[1], result[0]];
}
moreType([1, 'A']); // ['A', 1]
```

> 上面这段代码肯定会触发类型推论，因为moreType在调用时没有传类型，如果传类型，那肯定是按照类型来约束，其次，可以看到我们传递了一个`array`作为参数进去，接受参数的形参是result，`result作为形参，类型约束时用了一个中括号包括起来了，它相当于对数组中每一个元素的类型约定，下标是一一对应的，也就是说，实参和形参一一对应`，而约定返回值的类型放在了一个中括号中，这表示返回值是一个`array`，类型和返回值一一对应