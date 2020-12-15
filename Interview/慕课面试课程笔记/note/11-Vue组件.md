# Vue组件使用
## `props` 和 `$emit`

## 组件间通讯 - 自定义事件

## 组件生命周期 
![组件生命周期](https://img-blog.csdnimg.cn/20190923140445528.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L21hb3l1dXU=,size_16,color_FFFFFF,t_70)

## 生命周期(父子组件)
总结：从外到内，再从内到外
1. 加载渲染过程  
  `父beforeCreate`->`父created`->`父beforeMount`->`子beforeCreate`->`子created`->`子beforeMount`->`子mounted`->`父mounted`

2. 子组件更新过程  
`父beforeUpdate`->`子beforeUpdate`->`子updated`->`父updated`

3. 父组件更新过程  
`父beforeUpdate` -> `(子deactivated)`->`父updated`

4. 销毁过程  
`父beforeDestroy`->`子beforeDestroy`->`子destroyed`->`父destroyed`


## `Vue`高级特性
 - 自定义`v-model`
 - `$nextTick`
 - `slot`
 - 动态、异步组件
 - `keep-alive`
 - `mixin`

### 1. 自定义`v-model`
 ```html
<template>
    <!-- 例如：vue 颜色选择 -->
    <input type="text"
        :value="text1"
        @input="$emit('change1', $event.target.value)"
    >
    <!--
        1. 上面的 input 使用了 :value 而不是 v-model
        2. 上面的 change1 和 model.event1 要对应起来
        3. text1 属性对应起来
    -->
</template>

<script>
export default {
    model: {
        prop: 'text1', // 对应 props text1
        event: 'change1'
    },
    props: {
        text1: String,
        default() {
            return ''
        }
    }
}
</script>
 ```

 ### 2. `$nextTick`
  - `Vue`是异步渲染
  - `data`改变之后，`DOM`不会立刻 渲染
  - `$nextTick`会在`DOM`渲染之后触发，以获取最新`DOM`节点

### 3. `slot`

### 4. 动态组件

### 5. 异步组件
```javascript
export default {
  components:{
    FormDemo:() => import('../xxx/xxx)
  }
}
```

### 6. `keep-alive`
 - 缓存组件
 - 频繁切换，不需要重复渲染
 - `Vue`常见性能优化
 - 当组件在 `<keep-alive>` 内被切换，它的 `activated` 和 `deactivated` 这两个生命周期钩子函数将会被对应执行。

### 7. `mixin`
 - 多个组件有相同的逻辑，抽离出来
 - `mixin`并不是完美的解决方案，会有一些问题
 - `Vue3`提出的`Composition API`旨在解决这些问题

- 缺点
  - 变量来源不明确
  - 多`mixin`可能会造成命名冲突
  - `mixin`和组件可能出现多对多的关系，复杂度较高