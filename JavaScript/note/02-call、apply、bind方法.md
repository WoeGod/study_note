### 改变函数内this指向，JavaScript提供了三种方法 call() apply() bind()

# 1. call()
**主要作用**
1. 可以调用函数， 改变函数内`this`指向
2. 的主要作用可以实现继承


使用下面的例子来演示`call()`的作用
```javascript
var o = { 
  name:'andy' 
}
function foo(){
  // 没有使用 call() 修改this指向时，默认指向 Window
  console.log(this) // Object [global] {...}
}

foo()
```

```javascript
var o = { 
  name:'andy' 
}

function foo(a+b){
  console.log(this) // { name: 'andy' }
  console.log(a+b)  // 3
}

// 使用 call() 修改了this指向对象 o, 并传入两个参数
foo.call(o,1,2)
```

实现继承
```javascript
function Father(uname, age, sex){
  this.uname = uname;
  this.age = age;
  this.sex = sex;
}

function Son(uname, age, sex){
  Father.call(this, uname, age, sex);
}
var son = new Son('周星驰', 18, '男');
console.log(son)  // { uname: '刘德华', age: 18, sex: '男' } 
```

# 2. apply()
**主要作用**
1. 调用函数，可以改变函数内部this指向
2. 但是`apply`的参数必须是数组(伪数组)
3. `apply`的主要应用, 可以利用`apply`借助于数学内置对象求最大值

例子：
```javascript
var o = {
  name:'andy'
};

function fn(arr) {
  console.log(this); // { name: 'andy' }
  console.log(arr);  // pink
  console.log(typeof(arr));  // String   apply 会将数组转化成字符串
};

fn.apply(o,['pink'])
```

```javascript
var arr = [1,6,3,2,4,9,8]
var max = Math.max.apply(Math, arr)
console.log(max)  // 9
```

# 3. bind()
**主要作用**
1. 不会调用原来的函数，可以改变原来函数内部的`this`指向
2. 返回的是原函数改变`this`之后产生的新函数
3. 改变定时器`this`指向
4. 如果有的函数我们不需要立即调用，但是又想改变中国函数内部的`this`指向，此时用`bind` 

```javascript
var o = {
  name:'andy'
};

function fn(a,b) {
  console.log(this);  // { name: 'andy' }
  console.log(a + b); // 3
}

var f = fn.bind(o, 1, 2);
f();
```

改变定时器`this`指向
```javascript
setTimeout(function(){
  this.xxx = xxx //...
}.bind(this),3000)
```

*推荐学习文章：[细说 call、apply 以及 bind 的区别和用法](https://segmentfault.com/a/1190000018017796)*