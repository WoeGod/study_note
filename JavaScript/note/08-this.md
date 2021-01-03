# this
 - `this`指的是函数运行时所在的环境。

## 箭头函数
 - 箭头函数不会创建自己的`this`,它只会从自己的作用域链的上一层继承`this`

## 普通函数
 - 如果是该函数是一个构造函数，this指针指向一个新的对象
 - 在严格模式下的函数调用下，this指向undefined
 - 如果是该函数是一个对象的方法，则它的this指针指向这个对象
 - this的指向在函数创建的时候是决定不了的，在调用的时候才能决定

## 严格模式下的`this`
1. 全局作用域中的`this`  
在严格模式下，在全局作用域中，`this`指向`window`对象
```js
  "use strict";
  
  console.log("this.document === document",this.document === document); // true
  console.log("this === window",this === window);
  this.a = 9804;  // true
  console.log('this.a === window.a===',window.a);  // 9804
```
2. 全局作用域中函数中的`this`  
在严格模式下，这种函数中的`this`等于`undefined`

```js
  "use strict";

  function f1(){
    console.log(this);
  }
  
  function f2(){
    function f3(){
      console.log(this);
    }
    f3();
  }
  f1(); // undefined
  f2(); // undefined
```
3. 对象的函数（方法）中的`this`  
在严格模式下，对象的函数中的this指向调用函数的对象实例
```js
  "use strict";

  var o = new Object();
  o.a = 'o.a';
  o.f5 = function(){
    return this.a;
  }
  console.log(o.f5()); // 0.a
```

4. 构造函数的`this`  
在严格模式下，构造函数中的this指向构造函数创建的对象实例。
```js
  "use strict";
  
  function constru(){
    this.a = 'constru.a';
    this.f2 = function(){
      console.log(this.b);
      return this.a;
    }
  }
  var o2 = new constru();
  o2.b = 'o2.b';
  console.log(o2.f2());

  >>> o2.b
  >>> constru.a
```
> ——[JavaScript 严格模式下this的几种指向](https://segmentfault.com/a/1190000010108912)
## 箭头函数和普通函数的区别