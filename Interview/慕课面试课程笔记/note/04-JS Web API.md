# DOM
### 1. 'DOM'操作常用的API

### 2. `property` 和 `attribute`的区别


## `DOM`性能
### 1. 一次性插入多个`DOM`节点，考虑性能，怎么办？  


## 事件

### 1. 编写一个通用的事件监听函数

### 2. 描述事件冒泡的流程

### 3. 无限下拉的图片列表，如何监听每个图片的点击

## `ajax`
### 1. 手写一个简易的`ajax`

### 2. 跨域的常用实现方式


## 存储
### 1. 描述`cookie` `localStorage` `sessionStorage`区别


# 解析
# DOM
##  'DOM'操作常用的API
### 1. [`JS`获取`DOM`元素的方法(8种)](https://www.jianshu.com/p/6fefda57b51f)
```javascript
 - getElementById            // 通过ID获取
 - getElementsByName         // 通过name属性
 - getElementsByTagName      // 通过标签名
 - getElementsByClassName    // 通过类名
 - querySelector             // 通过选择器获取一个元素
 - querySelectorAll          // 通过选择器获取一组元素
 - document.documentElement  // 获取html的方法
 - document.body             // 获取body的方法

const div1 = document.getElementById('div1')  // 元素
const divList = document.getElementsByTagName('div')  // 集合
const containerList = document.getElementsByClassName('.container') // 集合
const pList = document.querySelectorAll('p')  // 集合
```

```javascript
alert($(window).height());    //浏览器当前窗口可视区域高度 
alert($(document).height());    //浏览器当前窗口文档的高度 
alert($(document.body).height());   //浏览器当前窗口文档body的高度 
alert($(document.body).outerHeight(true));    //浏览器当前窗口文档body的总高度 包括border padding margin 
alert($(window).width());     //浏览器当前窗口可视区域宽度 
alert($(document).width());   //浏览器当前窗口文档对象宽度 
alert($(document.body).width());    //浏览器当前窗口文档body的高度 
alert($(document.body).outerWidth(true));   //浏览器当前窗口文档body的总宽度 包括border padding margin 
```
### 2. `DOM`结构操作
 方法	|描述| 
--|--
getElementById()|	返回带有指定 ID 的元素。
getElementsByTagName()|	返回包含带有指定标签名称的所有元素的节点列表（集合/节点数组）。
getElementsByClassName()|	返回包含带有指定类名的所有元素的节点列表。
appendChild()|	把新的子节点添加到指定节点。
removeChild()|	删除子节点。
replaceChild()|	替换子节点。
insertBefore()|	在指定的子节点前面插入新的子节点。
createAttribute()	|创建属性节点。
createElement()|	创建元素节点。
createTextNode()|	创建文本节点。
getAttribute()|	返回指定的属性值。
setAttribute()|	把指定属性设置或修改为指定的值。

### 3. `property` 和 `attribute`的区别
>`attribute`（特性），是我们赋予某个事物的特质或对象。  
>`property`（属性），是早已存在的不需要外界赋予的特质。    

- `property` : 是有类型的，例如`Bollean`，`number`，`string`等
- `attribute`: 只能是`string`，而没有其他类型
- 两者都有可能引起`DOM`渲染

## `DOM`性能
  - `DOM`操作非常“昂贵”，避免频繁的`DOM`操作
  - 对`DOM`查询做缓存
  - 将频繁操作改为一次性操作
### 4. 一次性插入多个`DOM`节点，考虑性能，怎么办？  
```javascript
// 不缓存 DOM 查询结果
for (let = 0; i < document.getElementsByTagName('p').length; i++){
  // 每次循环，都会计算 length ，频繁进行 DOM 查询
}

// 缓存 DOM 查询结果
const pList = document.getElementsByTagName('p')
const length = pList.length
for (let i = 0; i < length; i++) {
  // 缓存 length，只进行一次 DOM 查询
}
```


- 将频繁操作改为一次性操作
```javascript
// 频繁操作 DOM 示例
const list = document.getElementById('list')

for (let i = 0; i < 10; i++){
  const li = document.createElement('li')
  li.innerHTML = `List item ${i}`
  list.appendChild(li)
}
```
```javascript 
// 优化改成一次性操作示例
const list = document.getElementById('list')

// 创建一个文档片段，此时还没有插入到 DOM 结构中
const frag = document.createDocumentFragment()

for (let i  = 0; i < 20; i++) {
    const li = document.createElement('li')
    li.innerHTML = `List item ${i}`

    // 先插入文档片段中
    frag.appendChild(li)
}

// 都完成之后，再统一插入到 DOM 结构中
list.appendChild(frag)

console.log(list)

```

## 事件

### 1. 编写一个通用的事件监听函数
```javascript
// 通用的事件绑定函数
// function bindEvent(elem, type, fn) {
//     elem.addEventListener(type, fn)
// }
function bindEvent(elem, type, selector, fn) {
    if (fn == null) {
        fn = selector
        selector = null
    }
    elem.addEventListener(type, event => {
        const target = event.target
        if (selector) {
            // 代理绑定
            if (target.matches(selector)) {
                fn.call(target, event)
            }
        } else {
            // 普通绑定
            fn.call(target, event)
        }
    })
}
```

### 2. 描述事件冒泡的流程

### 3. 无限下拉的图片列表，如何监听每个图片的点击

## `ajax`
### 1. 手写一个简易的`ajax`
```javascript
function ajax(url,successFn) {
  const xhr = new XMLHttpRequest()
  xhr.open('GET', '/data/test.json', true)   // xhr.open('POST', '/data/test.json', true)
  xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
          if (xhr.status === 200) {
              successFn(xhr.responseText)
          }
      }
  }
  xhr.send(null)   // xhr.send(JSON.stringify(postParams))
}

```

 - `xhr.readyState`
   - 0 - (未初始化) 还没有调用`send()`方法
   - 1 - (载入) 已调用`send()`方法，正在发送请求
   - 2 - (载入完成) `send()`方法执行完成,已经接受到全部响应内容
   - 3 - (交互) 正在解析响应内容
   - 4 - (完成) 响应内容解析完成,可以在客户端调用
 - `xhr.status`
   - 2xx - 表示成功除了请求, 如200
   - 3xx - 需要重定向, 浏览器直接跳转, 如 301 302 304
   - 4xx - 客户端请求错误, 如404 403
   - 5xx - 服务端错误

### 2. 跨域的常用实现方式
 - 同源策略
   - `ajax`请求时，浏览器要求当前网页和`server`必须同源(安全)
   - 同源: 协议、域名、端口，三者必须一致
- 加载图片 `css` `js` 可无视同源策略
  - `<img src=跨域的图片地址 />` 
  - `<link href=跨域的css地址 />` -- 可
  - `<script src=跨域的js地址 />`
  - `<img/>`可用于统计打点, 可使用第三方统计服务
  - `<link/>` `<script>` 可使用`CDN`,`CDN`一般都是外域
  - `<script>`可实现`JSONP`

### 1.`JSONP`实现跨域的原理是什么
`JSONP`利用`src`标签引用资源不受同源策略的影响的特性，向服务器端发送请求时在`url`中拼接一个`callback`函数，然后将服务器端的返回作为`callback`函数的参数进行调用，从而达到跨域资源请求的目的。

示例:
```JavaScript
var callbackHandler = function(data) {
    process(data) //对返回数据进行处理
}
<script src="http://xxx.com/xxx?callback=callbackHandler" />
```

### 2. `CORS` - 服务器设置 `http header`

## 存储
### `cookie` `localStorage` `sessionStorage`
 - `cookie`的缺点
   - 存储大小，最大 4KB
   - `http`请求时需要发送到服务端，增加请求数据量
   - 只能用`document.cookie = 'xxx'`来修改，太过简陋

- `localStorage` 和 `sessionStorage`
  - `HTML5`专门为存储而设计，最大可存 5M
  - `API`简单易用`setItem` `getItem`
  - 不会随着`http`请求被发送出去
  
- `localStorage` 和 `sessionStorage`的区别
  - `localStorage`数据会永久存储,除非代码手动删除
  - `sessionStorage`数据只存在于当前会话,浏览器关闭则清空
  - 一般用`localStorage`会更多一些