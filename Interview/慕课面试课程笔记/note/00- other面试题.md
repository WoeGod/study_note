# 前端基础
1. `typeof`能判断哪些类型
2. 何时使用`===` 何时使用`==`
3. `window.onload`和`DOMContentLoaded`的区别
4. `JS`创建10个`<a>`标签，点击的时候弹出对应的序号
5. 手写节流`trottle`、防抖`debounce`
6. `Promise`解决了什么问题

# Vue 相关
> 相关文章  
1.[Vue面试中，经常会被问到的面试题/Vue知识点整理](https://segmentfault.com/a/1190000016344599)  
2.[vue原理、使用及面试方面的总结](https://slbyml.github.io/QA/vue.html#vue%E5%8E%9F%E7%90%86%E3%80%81%E4%BD%BF%E7%94%A8%E5%8F%8A%E9%9D%A2%E8%AF%95%E6%96%B9%E9%9D%A2%E7%9A%84%E6%80%BB%E7%BB%93)

1. v-if 和 v-show 的区别。
2. 为何 v-for 中使用 key（要说明原理）？
3. 描述 Vue 生命周期（有父子组件的情况下）。
4. Vue 组件通讯的常见方式。
5. 描述组件渲染和更新的过程（开放型题目，自由发挥）。
6. 用 Vue 设计一个购物车，请设计组件结构，设计 vuex 数据结构。
7. `$route`和`$router`的区别是什么
8. 请举出`Vue`几种常用的指令
9. `Vue`常用的事件修饰符有哪些
10. `v-on`可以绑定多个方法吗
11. 如何定义`vue-router`的动态路由，获取传过来的值
12. `watch`和`computed`的差异是什么
13. 组件中`data`为什么是函数
   >vue中的data为对象，是引用类型，当重用组件时，一个组件对data做了更改，那么另一个组件也会跟着改，而使用返回一个函数返回数据，则每次返回都是一个新对象，引用地址不用，所以就不会出现问题

14. 请谈谈对于`MVVM`的理解
15. 第一次页面加载会出发哪几个钩子
16. `DOM`渲染在哪个生命周期中完成
17. `Vuex`是什么？怎么使用？哪种功能场景使用它
18. 虚拟`DOM`的优缺点
19. `Vuex`中`mutation`和`action`的详细区别
20. 简述`Vue`的`diff`算法原理

# webpack相关
1. 前端代码为何要进行构建和打包？
2. module chunk bundle 分别是什么意思，有何区别？
3. loader 和 plugin 的区别。
4. webpack 如何实现懒加载？
5. webpack 常见性能优化方式（开放型题目，自由发挥）。
6. babel-runtime 和 babel-polyfill 的区别。


# 解答

# 前端基础
1. `typeof`能判断哪些类型

2. 何时使用`===` 何时使用`==`
   - == 相等运算符，比较时会自动进行数据类型转换
   - === 严格相等运算符，比较时不进行隐式类型转换

3. `window.onload`和`DOMContentLoaded`的区别

4. `JS`创建10个`<a>`标签，点击的时候弹出对应的序号

5. 手写节流`trottle`、防抖`debounce`

6. `Promise`解决了什么问题

# Vue 相关
1. v-if 和 v-show 的区别。
2. 为何 v-for 中使用 key（要说明原理）？
3. 描述 Vue 生命周期（有父子组件的情况下）。
4. Vue 组件通讯的常见方式。
5. 描述组件渲染和更新的过程（开放型题目，自由发挥）。
6. 用 Vue 设计一个购物车，请设计组件结构，设计 vuex 数据结构。

# webpack相关
1. 前端代码为何要进行构建和打包？
2. module chunk bundle 分别是什么意思，有何区别？
3. loader 和 plugin 的区别。
4. webpack 如何实现懒加载？
5. webpack 常见性能优化方式（开放型题目，自由发挥）。
6. babel-runtime 和 babel-polyfill 的区别。