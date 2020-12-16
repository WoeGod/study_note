[手写前端面试代码题](https://mp.weixin.qq.com/s/yezSucSCcTK-cFSDNVz8uA)
### 1. `typeof`能判断哪些类型？

### 2. 何时使用 ===  何时使用 ==

### 3. 值类型和引用类型的区别

### 4. 手写深拷贝

### 5. javascript常用事件有哪些


## 原型和原型链

### 1. 如何准确判断一个变量是不是数组

### 2. 手写一个建议的`Jquery`, 考虑插件和扩展性

### 3. `class`的原型本质,怎么理解


## 作用域和闭包
### 1. `this`的不同应用场景,如何取值？

### 2. 手写`bind`函数

### 3. 实际开发中闭包的应用场景, 举例说明

### 闭包
#### 题目一
```javascript
function create() {
    const a = 100
    return function () {
        console.log(a)
    }
}

const fn = create()
const a = 200
fn() // 输出什么
```
#### 题目二
```javascript
function print(fn) {
    const a = 200
    fn()
}
const a = 100
function fn() { 
    console.log(a)
}
print(fn)  // 输出什么
```
#### 题目三

```javascript
// 创建 10 个 <a> 标签，点击的时候弹出来对应的序号是什么
let i,a
for (i = 0; i < 10; i++) {
    a = document.createElement('a')
    a.innerHTML = i + '<br>'
    a.addEventListener('click', function (e) {
        e.preventDefault()
        alert(i)
    })
    document.body.appendChild(a)
}

```


## 异步和单线程
### 1. 同步和异步的区别是什么？

### 2. 手写用`Promise`加载一张图片

### 3. 前端使用异步的场景有哪些

### 4. Promise
```JavaScript
// 第一题 
Promise.resolve().then(() => {
    console.log(1)
}).catch(() => {
    console.log(2)
}).then(() => {
    console.log(3)
})

// 第二题  
Promise.resolve().then(() => { 
    console.log(1)
    throw new Error('erro1')
}).catch(() => { 
    console.log(2)
}).then(() => {
    console.log(3)
})

// 第三题 
Promise.resolve().then(() => { 
    console.log(1)
    throw new Error('erro1')
}).catch(() => { 
    console.log(2)
}).catch(() => {
    console.log(3)
})
```

### `async`/`await`
 - `async`函数返回一个`Promise`
 - `await`后接一个`Promise`相当于`.then`
```javascript
async function fn(){
  return 100
}
(async function (){
  const a = fn()  //Promise { 100 }
  const b = await fn()  // 100
})()
```
```javascript
(async function () {
  console.log('start')
  const a = await 100
  console.log('a',a)
  const b = await Promise.resolve(200)
  console.log('b',b)
  const c = await Promise.reject(300)
  console.log('c',c)
  console.log('end')
})
```

### 宏任务和微任务
#### 1. 请描述`event loop`(事件循环/事件轮询)的机制，可画图
#### 2. 什么是宏任务和微任务，两者有什么区别
#### 3. `Promise`有哪三种状态？如何变化？
#### 题目一

```javascript
console.log(100)
setTimeout(()=>{
  console.log(200)
})
Promise.resolve().then(()=>{
  console.log(300)
})
console.log(400)

```

#### 题目二
```javascript
async function async1 (){
  console.log('async1 start') 
  await async2()
  
  console.log('async1 end')  
}

async function async2 () {
  console.log('async2')
}

console.log('script start')  

setTimeout(function (){ 
  console.log('setTimeout')  
},0)

async1()

new Promise (function (resolve){
  console.log('promise1') 
  resolve()
}).then(function () { 
  console.log('promise2')  
})

console.log('script end')  
``` 








# 答案
[手写前端面试代码题](https://mp.weixin.qq.com/s/yezSucSCcTK-cFSDNVz8uA)
### 1. `typeof`能判断哪些类型？
 - 能判断值类型、函数、能识别引用类型(不能再继续识别)
 - `console.log(typeof null)` // object
>JavaScript 中共有6 种基本数据类型： `Undefined` 、 `Null` 、 `Boolean` 、 `Number` 、 `String` 、 `Symbol` (new in ES 6) 
>
> 引用数据类型：对象(`Object`)、数组(`Array`)、函数(`Function`)。
```javascript
// 判断所有制类型
let a;                      typeof a    // 'undefined'
const str = 'abc';          typeof str  // 'string'
const n = 100;              typeof n    // 'number'
const b = true;             typeof b    // 'boolean'
const s = Symbol('s');      typeof s    // 'symbol'

// 判断函数
typeof console.log  //  'function'
typeof function () {}  // 'function'

// 能识别引用类型(不能再继续识别)
typeof null     //  'object'
typeof ['a','b']  //  'object'
typeof {x:100}    //  'object'
```

### 2. 何时使用 ===  何时使用 ==
 ```javascript 
 // 除了 == null  之外，其他一律用 ===   如：

 const obj = { x: 100 }
 if(obj.a == null ){}
//  相当于
if(obj.a === null || obj.a === undefined){}
 ```

### 3. 值类型和引用类型的区别

### 4. 手写深拷贝
```javascript
function deepClone (obj = {}){
  if(typeof obj !== 'object' || obj == null){
    // obj 是 null ，或者不是对象和数组，直接返回
    return obj
  }

  let result = obj instanceof Array ? [] : {}

  for (let key in obj){
     // 保证 key 不是原型的属性
    if(obj.hasOwnProperty(key)){
      result[key] = deepClone(obj[key])
    }
  }

  return result
}
```
 - `JSON.stringify`
   - 只能处理纯`JSON`数据
   - 有几种情况会发生错误
     - 包含不能转成`JSON`格式的数据
     - 循环引用
     - `undefined`,`NaN`, `-Infinity`, `Infinity` 都会被转化成`null`
     - `RegExp`/函数不会拷贝
     - `new Date()`会被转成字符串

### 5. javascript常用事件有哪些
1、 `onLoad` ：当页面加载完毕后触发，常用于`body`元素

2、 `onUnload` ：当页面关闭后触发，常用于`body`元素

3、 `onBlur` ：当失去焦点时触发，常用于`input`表单元素

4、 `onFocus` ：当获得焦点时触发，常用于`input`表单元素

5、 `onClick` ：当点击时触发，可以用于任何元素

6、 `onMouseOver` ：当鼠标悬浮时触发

7、 `onMouseOut` ：当鼠标离开时触发

8、 `onMouseDown` ：当鼠标按下时触发

9、 `onMouseUp` ：当鼠标弹起时触发

10、 `onMouseMove` ：当鼠标移动时触发

11、 `onChange` ：当状态改变时触发，常用于`select`下拉选框

12、 `onSelect` ：当文本框中的文本选中时触发

13、 `onkeypress` ：当键盘按下时触发（要快于`onkeydown`）

14、 `onkeydown` ：当键盘按下时触发（可能捕获功能键，如上下左右）

15、 `onkeyup` ：当键盘弹起时触发

16、 `onSubmit` ：当表单提交时触发，常用于form表单元素

17、 `onReset` ：当表单重置时触发，常用于form表单元素

## 原型和原型链
- 原型关系
  - 每个`class`都有显式原型`prototype`
  - 每个示例都有隐式原型`__proto__`
  - 示例的`__proto__`指向对应`class`的`prototype`
- 基于原型的执行规则
  - 获取属性`xialuo.name`或执行父`xialuo.sayhi()`时
  - 先在自身属性和方法寻找
  - 如果找不到则自动去`__proto__`中寻找

![原型示例](https://img-blog.csdnimg.cn/20201213144450349.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L0dyYW5lcnk=,size_16,color_FFFFFF,t_70)

```javascript
// 父类
class People {
    constructor(name) {
        this.name = name
    }
    eat() {
        console.log(`${this.name} eat something`)
    }
}

// 子类
class Student extends People {
    constructor(name, number) {
        super(name)
        this.number = number
    }
    sayHi() {
        console.log(`姓名 ${this.name} 学号 ${this.number}`)
    }
}

const xialuo = new Student('夏洛', 100)

```
![原型链示例](https://img-blog.csdnimg.cn/20201213145824851.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L0dyYW5lcnk=,size_16,color_FFFFFF,t_70)

### 1. 如何准确判断一个变量是不是数组
 - `arr instanceof Array`

### 2. 手写一个建议的`Jquery`, 考虑插件和扩展性

### 3. `class`的原型本质,怎么理解


## 作用域和闭包

### 闭包

```javascript
// 函数作为返回值
function create() {
    const a = 100
    return function () {
        console.log(a)
    }
}

const fn = create()
const a = 200
fn() // 100
```
```javascript
// 函数作为参数被传递
function print(fn) {
    const a = 200
    fn()
}
const a = 100
function fn() { 
    console.log(a)
}
print(fn) // 100
```

 - 所有的自由变量的查找，是在函数定义的地方，向上级作用域查找
 - 不是在执行的地方！！！

#### 题目三

```javascript
// 创建 10 个 <a> 标签，点击的时候弹出来对应的序号是什么
let i,a
for (i = 0; i < 10; i++) {
    a = document.createElement('a')
    a.innerHTML = i + '<br>'
    a.addEventListener('click', function (e) {
        e.preventDefault()
        alert(i)
    })
    document.body.appendChild(a)
}
// 点击每一个都弹出 10
```

## `this`
 - `this`的取值是在函数执行的时候确定的，不是在函数定义的时候确定的

### 1. `this`的不同应用场景,如何取值？

### 2. 手写`bind`函数

### 3. 实际开发中闭包的应用场景, 举例说明


## 异步和单线程
### 1. 同步和异步的区别是什么？
  - 基于JS是单线程语言
  - 异步不会阻塞代码执行
  - 同步会阻塞代码执行
### 2. 手写用`Promise`加载一张图片

### 3. 前端使用异步的场景有哪些
 - 网络请求,如`ajax`图片加载
 - 定时任务,如`setTimeout`

### 4. Promise
```JavaScript
// 第一题 >>>  1 3 
Promise.resolve().then(() => {
    console.log(1)
}).catch(() => {
    console.log(2)
}).then(() => {
    console.log(3)
})

// 第二题  >>>  1 2 3 
Promise.resolve().then(() => { 
    console.log(1)
    throw new Error('erro1')
}).catch(() => { 
    console.log(2)
}).then(() => {
    console.log(3)
})

// 第三题 >>>  1 2
Promise.resolve().then(() => { 
    console.log(1)
    throw new Error('erro1')
}).catch(() => { 
    console.log(2)
}).catch(() => {
    console.log(3)
})
```

### `async`/`await`
 - `async`函数返回一个`Promise`
 - `await`后接一个`Promise`相当于`.then`
```javascript
async function fn(){
  return 100
}
(async function (){
  const a = fn()  //Promise { 100 }
  const b = await fn()  // 100
})()
```
```javascript
(async function () {
  console.log('start')
  const a = await 100
  console.log('a',a)
  const b = await Promise.resolve(200)
  console.log('b',b)
  const c = await Promise.reject(300)
  console.log('c',c)
  console.log('end')
})
// 结果
>>> start
>>> a 100
>>> b 200
```

### 宏任务和微任务
#### 1. 请描述`event loop`(事件循环/事件轮询)的机制，可画图

#### 2. 什么是宏任务和微任务，两者有什么区别
 - 宏任务有哪些？
 - 微任务有哪些？
   - 宏任务: `setTimeout`,`setInterval`,`Ajax`,`DOM`事件
   - 微任务: `Promise`, `async/await`
   - 微任务触发时机比宏任务更早(微任务在`DOM`渲染之前触发，宏任务在`DOM`渲染之后触发)

#### 3. `Promise`有哪三种状态？如何变化？
- 初始化，状态：pending
- 当调用resolve(成功)，状态：pengding=>fulfilled
- 当调用reject(失败)，状态：pending=>rejected


#### 题目一

```javascript
console.log(100)
setTimeout(()=>{
  console.log(200)
})
Promise.resolve().then(()=>{
  console.log(300)
})
console.log(400)

// 结果
>>> 100
>>> 400
>>> 300
>>> 200
```

#### 题目二
```javascript
async function async1 (){
  console.log('async1 start') 
  await async2()
  
  console.log('async1 end')  
}

async function async2 (){
  console.log('async2') 

console.log('script start') 

setTimeout(function (){ 
  console.log('setTimeout')  
},0)

async1()

new Promise (function (resolve){
  console.log('promise1') 
  resolve()
}).then(function () { 
  console.log('promise2')  
})

console.log('script end')  
``` 

**解析**
```javascript
async function async1 (){
  console.log('async1 start')  // 2
  await async2()

  // await 后面的都作为回调内容 ———— 微任务1
  console.log('async1 end')  // 6 
}

async function async2 (){
  console.log('async2')  // 3
}

console.log('script start')  // 1

setTimeout(function (){ // 宏任务 setTimeout
  console.log('setTimeout')  // 8
},0)

async1()

// 初始化 promise 时,传入的函数会立刻被执行
new Promise (function (resolve){
  console.log('promise1') // 4 
  resolve()
}).then(function () { // 微任务2
  console.log('promise2')  // 7
})

console.log('script end')   // 5

// 同步代码执行完毕(event loop - call stack 被清空)
// 执行微任务
// (尝试触发 DOM 渲染)
// 触发 Event Loop , 执行宏任务
``` 
![课程 8-16 微任务和宏任务的根本区别](https://img-blog.csdnimg.cn/20201214111105279.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L0dyYW5lcnk=,size_16,color_FFFFFF,t_70)
