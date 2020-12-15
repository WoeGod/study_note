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

## 表单
 - `v-model`
 - 常见的表单项 `textarea` `checkbox` `radio` `select` 
 - 修饰符 `lazy` `number` `trum`