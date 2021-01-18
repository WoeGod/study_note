  # CSS 布局
 ### 1. 盒模型宽度计算
 ```html
 <!-- 请问 div1 的 offsetWidth 是多大? -->
<style>
  #div1{
    width:100;
    padding:10px;
    border:1px solid #CCC;
    margin:10px;
  }
</style>
<div id="div1">
</div> 
 ```

补充：如果让`offsetWidth`的大小等于100px要怎么做？


### 2. `margin` 纵向重叠问题
```html
<!-- AAA 和 BBB 之间距离是多少？ -->
<style>
 p{
   font-size:16px;
   line-height:1;
   margin-top:10px;
   margin-bottom:15px
 }

 <p>AAA</p>
 <p></p>
 <p></p>
 <p></p>
 <p>BBB</p>
</style>
```


### 3. `margin`负值问题
- `margin-top`和`margin-left`负值,
- `margin-right`负值,
- `margin-bottom`负值,


### 4. BFC理解与应用 什么是BFC？BFC如何应用

### 5. 如何实现圣杯布局和双飞翼布局

### 6. 手写`clearfix`

### 7.  `flex`实现一个三点色子

 # CSS 定位
 ### 1. `absolute`和`relative`分别依据什么定位？
 
 ### 2. 居中对齐有哪些实现方式


# CSS 图文样式
### 1. `line-height`如何继承
```html
<!-- 如下代码，p 标签的行高会是多少？ -->
<style>
body {
  font-size:20px;
  line-height:200%; 
}
p {
  font-size:16px;
}
</style>
<body>
  <p>AAA</p>
</body>
```

# CSS 响应式
### 1. `rem`是什么？

### 2. `rem` 的弊端


# 其它
### `CSS`中哪些样式可继承，哪些不可继承

### `CSS`中可以使元素隐藏的方式有哪些？
![](https://segmentfault.com/img/bVbbACL?w=855&h=317/view)
[CSS中用 opacity、visibility、display 属性将 元素隐藏 的 对比分析](https://segmentfault.com/img/bVbbACL?w=855&h=317)

### `CSS`多行文字垂直居中实现方法








 # CSS 布局 (答案)
 ### 1. 盒模型宽度计算
 ```html
 <!-- 请问 div1 的 offsetWidth 是多大? -->
<style>
  #div1{
    width:100;
    padding:10px;
    border:1px solid #CCC;
    margin:10px;
  }
</style>
<div id="div1">
</div> 
 ```

解：
`offsetWidth` = (内容宽度 + 内边距 + 边框), 无外边距
`offsetWidth` = 100 + 10 * 2 + 1 * 2 = 122px

补充：如果让`offsetWidth`的大小等于100px要怎么做？
```css
  #div1{
    width:100;
    padding:10px;
    border:1px solid #CCC;
    margin:10px;
    box-sizing:border-box; // 增加这个
  }
```

### 2. `margin` 纵向重叠问题
```html
<!-- AAA 和 BBB 之间距离是多少？ -->
<style>
 p{
   font-size:16px;
   line-height:1;
   margin-top:10px;
   margin-bottom:15px
 }

 <p>AAA</p>
 <p></p>
 <p></p>
 <p></p>
 <p>BBB</p>
</style>
```
解：15px
- 相邻元素的`margin-top`和`margin-bottom`会发生重叠
- 空白内容的`<p></p>`也会重叠

### 3. `margin`负值问题
- `margin-top`和`margin-left`负值,元素向上、向左移动
- `margin-right`负值,右侧元素左移,自身不受影响
- `margin-bottom`负值,下方元素上移,自身不受影响


### 4. BFC理解与应用 什么是BFC？BFC如何应用
- 什么是`BFC`?
  - `Block format context` 块级格式化上下文
  - 一块独立渲染区域，内部元素的渲染不会影响边界以外的元素

- 形成`BFC`的常见条件
  - `float`不为`none`
  - `position`是`absolute`或`fixed`
  - `overflow`不是`visible`
  - `display`是`flex` `inline-block` `table-cell` `table-caption`

- `BFC`如何应用
  - 清除浮动
  - 解决 `margin` 重叠

### 5. 如何实现圣杯布局和双飞翼布局
- 圣杯布局和双飞翼布局的目的
  - 三栏布局，中间一栏最先加载和渲染(内容最重要)
  - 两侧内容固定，中间内容随着宽度自适应
  - 一般用于PC网页
- 圣杯布局和双飞翼布局的技术总结
  - 使用`float`布局
  - 两侧使用`margin`负值，以便和中间内容横向重叠
  - 防止中间内容被两侧覆盖，一个用`padding`一个用`margin`
### 6. 手写`clearfix`
```css
.clearfix:after{
  content:'',
  display:block;
  clear:both;
}
.clearfix {
  *zoom:1; /* 兼容 IE 低版本*/
}
```

### 7.  `flex`实现一个三点色子
```html
<style>
  .box {
    width: 200px;
    height: 200px;
    border: 2px solid #ccc;
    border-radius: 10px;
    padding: 20px;

    display: flex;
    justify-content: space-between;
  }
  .item {
      display: block;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      background-color: #666;
  }
  .item:nth-child(2) {
      align-self: center;
  }
  .item:nth-child(3) {
      align-self: flex-end;
  }
</style>
<body>
 <div class="box">
        <span class="item"></span>
        <span class="item"></span>
        <span class="item"></span>
  </div>
</body>
```


 # CSS 定位
 ### 1. `absolute`和`relative`分别依据什么定位？
  - `relative`依据自身定位
  - `absolute`依据最近一层的定位元素定位
    - 定位元素 `absolute` `relative` `fixed` `body`  
 ### 2. 居中对齐有哪些实现方式
  - 水平居中
    - `inline`元素： `text-algin:center`
    - `block`元素： `margin:auto`
    - `absolute`元素： `left:50%`+ `margin-left`负值
  - 垂直居中
    - `inline`元素：`line-height`的值等于`height`值
    - `absolute`元素：`top:50%`+`margin-top`负值
    - `absolute`元素：`top,left,bottom,right = 0 + margin:auto`

# CSS 图文样式
### 1. `line-height`如何继承
```html
<!-- 如下代码，p 标签的行高会是多少？ 32px -->
<style>
body {
  font-size:20px;
  line-height:200%; 
}
p {
  font-size:16px;
  /*父(line-height:200%) (继承)line-height:32px; 20px * 200% = 40px */
  /*父(line-height:35px) (继承)line-height:35px */
  /*父(line-height:1.5) (继承)line-height:24px; 16px * 1.5 = 35px */
}
</style>
<body>
  <p>AAA</p>
</body>
```

# CSS 响应式
### 1. `rem`是什么？
 - `rem`是一个长度单位
   - `px` ,绝对长度单位,最常用
   - `em`, 相对长度单位,相对于父元素,不常用
   - `rem`,相对长度单位,相对于根元素,常用于响应式布局
### 2. `rem` 的弊端：阶梯性
```css
 @media only screen and (max-width: 374px) {
            /* iphone5 或者更小的尺寸，以 iphone5 的宽度（320px）比例设置 font-size */
            html {
                font-size: 86px;
            }
        }
        @media only screen and (min-width: 375px) and (max-width: 413px) {
            /* iphone6/7/8 和 iphone x */
            html {
                font-size: 100px;
            }
        }
        @media only screen and (min-width: 414px) {
            /* iphone6p 或者更大的尺寸，以 iphone6p 的宽度（414px）比例设置 font-size */
            html {
                font-size: 110px;
            }
        }
```

### `CSS`中可以使元素隐藏的方式有哪些？
![](https://segmentfault.com/img/bVbbACL?w=855&h=317/view)
[CSS中用 opacity、visibility、display 属性将 元素隐藏 的 对比分析](https://segmentfault.com/img/bVbbACL?w=855&h=317)