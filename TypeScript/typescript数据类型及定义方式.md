### 在typescript中数据类型分为两大类
>#### 原始数据类型

> ##### null和undefined是所有类型的子类型，因此其他类型约定后，除了赋值约定类型内的值外还可以赋值null和undefined

- **Symbol** 暂不讨论

- **number** 数值
```
// 值支持八进制、十六进制字符编码、支持正负无穷、支持NaN
let num:number = 1;
```
- **string** 字符串
```
let str:string = 'b';
// 模板字符串
let result:string = `a${str}c`; 
```
- **boolean** 布尔
```
let bool:boolean = true;
```
- **void** 空值
```
// 定义一个没有返回值的函数
function unfn():void {
    console.log(1);
    // return 后面跟除了undefined、null外的其他任何类型的返回值就会导致发生编译错误
}
// 定义一个空的变量,它的值只能是undefined或null
let v:void = undefined;
```
- **undefined**和**null**
```
// 定义null和undefined后只能被赋值为null和undefined,但是区别于void的是，他们作为其他类型的子类，可以被当做值赋给其他类型，void类型的则不可以
// 定义一个undefined
let un:undefined = undefined;
// 定义一个null
let nu:null = null;
```
- **any** 任意值
```
let a:any = 1;
a = 'abc';
a = true;
// 通过any则可以定义一个任意值的变量，这等价于：
let b;
b = 'abc';
b = true
// 未指定类型的变量并且在初始化的时候未赋值，会被认为是一个任意值
```
> 不指定变量类型，不初始化值，是任意值，但是不指定变量类型，却对其进行了初始化，也就是说初始化进行了赋值操作，ts则会进行**类型推论**：

```
let a = 1; // 初始化值
a = 'abc';
// 上面的代码触发类型推论就等价于：let a:number = 1;
// 这个时候编译会发生错误，因为触发了ts的类型推论，它会认为a的类型是number，赋值string类型就会触发错误
let b; // 不初始化
b = 1;
b = 'abc';
// 不初始化，b被认为是一个any类型，因此可以赋值任意类型的值，并不会发生错误
```

- **|** 联合类型
> any任意类型很宽泛，但是让一个变量的类型只能是任意的两种以上的类型就难以实现，这里可以通过`联合类型`

```
let a:string|number;
a = 'abc';
a = 123;
// 通过|指定联合类型，上面的表示a的类型可以是string也可以是number
a = true;
// a的类型已经约束为string或number，当赋值boolean则会发生编译错误
// 注意：当访问任意类型的属性和方法的时候，需要确保他们存在共同的特点，否则会发生错误，比如访问a.length,当a为string的时候可以访问，当a为number的时候，则会发生异常，因为number没有length属性
```

>#### 对象数据类型
- **object**
> 接口interface,它是对行为的抽象，相当于通过它约定一个集合的类型
```
// 定义一个接口
interface Person {
    name: string,
    age: number
}
let tom:Person = {
    name: 'tom',
    age: 20
}
// 注意：接口一般首字母大写，当接口中定义了固定的key和类型，那么在给对象定义key和赋值的时候，key和值的类型必须一一对应，并且key的数量与接口的数据必须一直，多或者少于接口，都会编译抛出异常
// 注： null、undefined是所有类型的子类型，因此赋值这两个结果并不会出现意外
```
> 上面的这种方式定义一个接口，当规定key的个数和值的类型后，我们就无法改变，但是当有一些key是有可能会用到，有可能就不需要，因此我们需要用到`可选属性`

- 可选属性表示已经定义的属性可以有也可以没有，并不代表可以新增未定义的属性

```
// 定义接口
interface Person {
    name: string,
    age?: number
}
let tom:Person = {
    name: 'tom',
    age: 20
}
let lucy:Person = {
    name: 'lucy'
}
// 上面的age加了?号，因此不会编译异常
let john:Person = {
    name: 'tom',
    sex: '男'
}
// 可选的是age，但是新增加未定义的age则会编译抛出异常
```

> 上面的我们可以定义可选属性，但是我们依然不能添加新的属性在里面，比如说我们不确定将来会有哪些属性的情况，因此我们需要用到`任意属性`

- 任意属性表示除了已经约定的和可选的属性，可以任意新增属性，但是定义任意属性需要注意的是，任意属性的值类型必须是其他属性值类型的超集，因此，一般我们都用any，因为其他类型都是any的子集

```
// 定义接口
interface Person {
    name: string,
    age?: number,
    // 这里的porpName只是相当于任意属性，仅仅是一个代表任意名称的占位符，你也可以叫它a||b，它的key类型只能是number或者string，值类型必须是其他key的值类型的超集
    // 当[porpName:number]:any的key类型为number的时候，那么意味着新增的key的类型必须是number类型才可以
    [porpName:string]:any
}
let tom:Person = {
    name: 'tom',
    age: 20
}
let lucy:Person = {
    name: 'lucy'
}
let john:Person = {
    name: 'tom',
    sex: '男'
}
// 这个时候新增sex将不会编译报错
```
> 上面的情况已经足够好，但是当我们想要给对象中设置一个固定的值，并且希望它不能被改变，在js中，通过const定义常量，对象通过defineProperty或者proxy来完成这一需求，在ts中对象的这个需求实现起来将会更简单，可以通过设置`只读属性`

```
// 定义接口
interface Person {
    // 设置readonly属性
    readonly name: string,
    age?: number,
    [porpName:string]:any
}
let tom:Person = {
    name: 'tom',
    age: 20
}
let lucy:Person = {
    name: 'lucy'
}
let john:Person = {
    name: 'tom',
    sex: '男'
}
tom.name = 'sare';
// 这个时候编译则会抛出异常，接口中定义的属性是只读，当对象初始化以后，这个属性将不可以再被修改
```
- **数组**
> 规定一个数组元素的类型，我们通过变量名:类型[]这样的形式来定义，定义普通类型，类型后面没有其他东西，这点需要记住
```
let arr:number[] = [1, 2, 3, 4, 5]; 
// 上面种方式定义了数字元素的类型只能是数值，除了数值和他们的子类型null、undefined，其他类型的值添加到数组种都会引起编译异常
arr.push('8');
// 调用数组的方法，尝试给数组添加一个字符串类型的值也会被检测到从而抛出异常
```
> 当然也可通过接口interface来定义数组，不过不常用，它看起来有点麻烦，但是它是类数组常用的一种规定类型的方式

```
interface NumberArray {
    // 这里的index表示数组中的每一个下标，也是一个占位，我们用index更加合理，当然用其他的名称来表示也是可以，我们都是知道数组的下标其实就相当于对象的key，下标默认的只能是数值类型的，所以我们暂时只能将key的类型设置为number
    [index: number]: number
}
let arr: NumberArray = [1, 2, 3, 4, 5];
// 上面的接口定义数组中元素的类型为number类型，当你出现除null、number、undefined之外的类型则会发生异常
```

> 类数组, 我们都知道类数组不是真实的数组，比如我们一些获取dom节点的方法拿到的数组，又比如arguments，假如我们想限制类数组的类型，普通的方式就做不到了

```
function fn() {
    let arr:number[] = arguments;
}
// 这里我们通过定义普通数组的方式定义，就会抛出异常，因为arguments是一个类数组，我们可以通过接口interface像下面这样：

function fn() {
    let args: {
        [index: number]: number;
        length: number;
        // 这个属性在严格模式下是被废弃的，它可以引用在该函数体内执行的函数递归调用
        callee: Function;
    } = arguments;
}
// 上面通过接口约束数组元素、length、callee的类型之后，编译正常

// 事实上常用的类数组都有自己的接口定义，如 IArguments, NodeList, HTMLCollection等，因此我们可以这么写:

function sum() {
    // IArguments就等价于上面定义的接口
    let args: IArguments = arguments;
}
```
> 定义存储任意类型的数组

```
let arr:any[] = [1, 'a', [], {}]
// 使用any定义任意类型
```

