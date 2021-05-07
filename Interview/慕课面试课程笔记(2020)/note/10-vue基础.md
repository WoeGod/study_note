## 面试题集合
### 1. `v-if` 和 `v-show`的区别,以及各自的使用场景

### 2. 为何在`v-for`中使用`key`

### 3. 为何组件`data`必须是一个函数

### 4. `ajax`请求应该放在哪个生命周期
 - 在created的时候，视图中的dom并没有被渲染出来，所以此时如果直接去操作dom节点，无法找到相关元素。
 - 在mounted中，由于此时的dom元素已经渲染出来了，所以可以直接使用dom节点。

### 5. 如何自己实现`v-model`

### 6. 多个组件有相同的逻辑，如何抽离？
 - `mixin`
 - 以及`mixin`的一些缺点

### 7. 何时要使用异步组件
 - 加载大组件
 - 路由异步加载

### 8. 何时需要使用`keep-alive`
 - 缓存组件，不需要重复渲染
 - 如多个静态`tab`页的切换
 - 优化性能

### 9. 何时需要使用`beforeDestory`
 - 解绑自定义事件`event.$off`
 - 清除定时器
 - 解绑自定义的`DOM`事件，如 `window scroll` 等

### 10. 什么是作用域插槽

### 11. `Vuex`中`action`和`mutation`有何区别
 - `action`中处理异步，`mutation`不可以
 - `mutation`做原子操作(每次都做一个操作，比较原子的
 - `action`可以整合多个`mutation`
### 12. `Vue-router`常用的路由模式
- `hash`
- `history`(需要服务端支持)
- 两者比较

### 13. `Vue`常见性能优化方式
 - 合理使用`v-show`和`v-if`
 - 合理使用`computed`
 - `v-for`时加`key`, 以及避免和`v-if`同时使用
 - 自定义事件、 `DOM`事件及时销毁、
 - 合理使用异步组件
 - 合理使用`keep-alive`
 - `data`层级不要太深
 - 使用`vue-loader`在开发环境做模板编译(预编译)
 - `webpack` 层面的优化
 - 前端通用的性能优化, 如图片懒加载
 - 使用`SSR`

### 如何配置`Vue-router`异步加载

### `$route`和`$router`有什么区别
 - `$router`为`VueRouter`实例，想要导航到不同到不同的`URL`，则使用`$router.push`方法
 - `$route`为当前`router`跳转对象里面可以获取`name` `path` `query` `params`等

### `Vue`如何进行深度监听，如果要监听对象的某一个属性该怎么写？

# Vue基础
### 1. `computed` 和 `watch`
 - `computed`有缓存，`data`不变则不会重新计算
 - `watch`如何深度监听
 - `watch`监听引用类型，拿不到`oldVal`

#### `watch`深度监听
```javascript
  data() {
      return {
          name: '双越',
          info: {
              city: '北京'
          }
      }
  },
  watch:{
    name(oldVal, val) {
      // eslint-disable-next-line
      console.log('watch name', oldVal, val) // 值类型，可正常拿到 oldVal 和 val
    },
    info: {
      handler(oldVal, val) {
          // eslint-disable-next-line
          console.log('watch info', oldVal, val) // 引用类型，拿不到 oldVal 。因为指针相同，此时已经指向了新的 val
      },
      deep: true // 深度监听
    }
}
``` 

### 2. 动态`class`和`style`的使用
```html
<template>
    <div>
        <p :class="{ black: isBlack, yellow: isYellow }">使用 class</p>
        <p :class="[black, yellow]">使用 class （数组）</p>
        <p :style="styleData">使用 style</p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            isBlack: true,
            isYellow: true,

            black: 'black',
            yellow: 'yellow',

            styleData: {
                fontSize: '40px', // 转换为驼峰式
                color: 'red',
                backgroundColor: '#ccc' // 转换为驼峰式
            }
        }
    }
}
</script>

<style scoped>
    .black {
        background-color: #999;
    }
    .yellow {
        color: yellow;
    }
</style>
```

### 3. `v-if` 和 `v-show`的区别,以及各自的使用场景
- `v-if` 是动态添加，当值为`false` 时，是完全移除该元素，即`dom` 树中不存在该元素。 
- `v-show` 仅是隐藏/ 显示`(display:none)`，值为`false` 时，该元素依旧存在于`dom` 树中。
- 频繁切换使用`v-show`,少数或者一次性使用则用`v-if`

### 为何在`v-for`中使用`key`
 - 必须用`key`，且不能是`index`和`random`
 - `diff`算法中通过`tag`和`key`来判断，是否是`sameNode`
 - 减少渲染次数，提升渲染性能

## 表单
 - `v-model`
 - 常见的表单项 `textarea` `checkbox` `radio` `select` 
 - 修饰符 `lazy` `number` `trim`

# `Vue-router`

## 路由模式
 - `hash`模式(默认), 如`http://abc.com/#/user/10`
 - `history`模式, 如`http://abc.com/user/20`
 - 后者需要`server`端支持，因此无特殊需求可选择前者

### 路由配置 懒加载


### 用`JS`模拟`DOM`结构
![用JS模拟DOM结构](https://img-blog.csdnimg.cn/20201215220044142.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L0dyYW5lcnk=,size_16,color_FFFFFF,t_70)

