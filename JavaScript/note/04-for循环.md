# for
 缺点：写法繁琐，代码可读性不强
```javascript
lists = ['apple','banana','pear','watermelon','pineapple']

for (let i = 0; i < arr.length; i++){
  console.log(arr[i]);
}

```

# forEach
优点：语法简洁
缺点：不能终止或者跳过(其它几种循环都可以)
```javascript
lists = ['apple','banana','pear','watermelon','pineapple']

lists.forEach(list => {
  // if(list === 1){
  //   continue  // 报错：SyntaxError: Illegal continue statement: no surrounding iteration statement
  //                使用 break 则报错：Illegal break statement
  // }
  console.log(list);
})
```
# for...in
>`for...in` 语句用于对数组或者对象的属性进行循环操作，循环中的代码每执行一次，就会对数组的元素或者对象的属性进行一次操作，因此大多数的时候`for...in`用来遍历对象，遍历数组建议用`for`循环。

语法：
```javascript
for(变量 in 对象)
{
    在此执行代码
 }
 ```
>“变量”用来指定变量，指定的变量可以是数组元素，也可以是对象的属性。`for...in`的`key`是`String`类型，而非数字，它包含当前属性的名称或当前数组元素的索引。

【注】：`in`是`JavaScript`中的一个操作符，用来判断某个属性是否属于某个对象，判断的属性可以是对象自身的属性，也可以使通过`prototype`继承的属性。

## for...in 遍历数组
```javascript
lists = ['apple','banana','pear','watermelon','pineapple']

for (let index in lists){
  console.log(index);  // 0,1,2,3,4   
  console.log(typeof(index));   // string  string  string  string  string
  console.log(lists[index]);  // apple banana pear watermelon pineapple
}
```

## for...in 遍历对象
```javascript
obj = {
  name : "wu",
  age: 18,
  address: 'beijing'
}

for (let index in obj){
  console.log(index);  // name,age,address
  console.log(obj[index]);  // wu,18,beijing
}
```
【注】 需要注意的一点是`for...in`会遍历对象的属性，包括它自身的属性以及从prototype那继承来的属性。
```JavaScript
obj = {
  name : "wu",
  age: 18,
  address: 'beijing'
}

Object.prototype.number="2000";  //为obj原型添加一个number属性

for (let index in obj){
  console.log(obj[index]);  // wu,18,beijing,2000
}
```
为什么控制台将number也输出了呢？
>因为`number`属性是obj原型新添加的属性，而`for-in`会将该对象的属性全部遍历，其中就包括从原型继承的属性，因此`obj`继承了number属性，所以也输出了`number`属性的值。很多初学者常常忽略这个问题，这也导致许多`bug`的出现。

那么该如何避免这种问题呢？这时候`hasOwnProperty()`方法就派上用场了。
>`hasOwnProperty`函数用于指示一个对象自身(不包括原型链)是否具有指定名称的属性。如果有，返回`true`，否则返回`false`
>
>该方法属于`Object`对象，由于所有的对象都"继承"了`Object`的对象实例，因此几乎所有的实例对象都可以使用该方法

下面展示一下`hasOwnProperty()`方法的用法。
```javascript
obj = {
  name : "wu",
  age: 18,
  address: 'beijing'
}

Object.prototype.number="2000";  //为obj原型添加一个number属性

for (let index in obj){
  if(!obj.hasOwnProperty(index)){
    continue;
  }
  console.log(obj[index]);  // wu,18,beijing 
}
```
此时，`for...in`遍历的只有`obj`对象自身的属性，遍历数组同理

# for...of
>`for...of`语句在可迭代对象（包括 `Array`，`Map`，`Set`，`String`，`TypedArray`，`arguments` 对象等等）上创建一个迭代循环，调用自定义迭代钩子，并为每个不同属性的值执行语句

语法：
```javascript
for (variable of iterable) {
    //statements
}
```
## 迭代`Array`
```javascript
let iterable = [10, 20, 30];

for (let value of iterable) {
    value += 1;
    console.log(value);
}
// 11
// 21
// 31
```

如果你不想修改语句块中的变量 , 也可以使用`const`代替`let`。

```javascript
let iterable = [10, 20, 30];

for (const value of iterable) {
  console.log(value);
}
// 10
// 20
// 30
```
# `for...of`与`for...in`的区别
无论是`for...in`还是`for...of`语句都是迭代一些东西。它们之间的主要区别在于它们的迭代方式。

`for...in` 语句以任意顺序迭代对象的可枚举属性。

`for...of` 语句遍历可迭代对象定义要迭代的数据。
