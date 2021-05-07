# `Webpack`
### 1. 前端代码为何要进行构建和打包

### 2. `module` `chunk` `bundle`分别什么意思，有何区别

### 3. `loader`和`plugin`的区别,常见的`loader`和`plugin`有哪些

### 4. `webpack`如何实现懒加载

### 5. `webpack`常见性能优化

### 6. `babel-runtime`和`babel-polyfill`的区别

### 7. `webpack`高级配置
 - 多入口
 - 抽离`css`文件
 - 抽离公共代码
 - 懒加载
 - 处理`JSX`
 - 处理`Vue`

### 8. `babel`和`webpack`的区别

### 9. 为何`proxy`不能被`Polyfill`


# `Webpack`
### 1. 前端代码为何要进行构建和打包
 - 体积更小(`Tree-Shaking` 压缩 合并),加载更快
 - 编译高级语言或语法(`TS`,`ES6+`,模块化,`scss`)
 - 兼容性和错误检查(`Polyfill`、`postcss`、`eslint`)
 - 统一、高效到开发环境
 - 统一的构建流程和产出标准
 - 集成公司构建规范(提测、上线等)

### 2. `module` `chunk` `bundle`分别什么意思，有何区别
 - `module` - 各个源码文件，`webpack`中一切皆模块
 - `chunk` - 多模块合并成的，如`entry` `import()` `splitChunk`
 - `bundle` - 最终到输出文件

### 3. `loader`和`plugin`的区别,常见的`loader`和`plugin`有哪些
 - `loader`模块转换器，如`less`->`css`
 - `plugin`扩展插件,如`HtmlWebpackPlugin`

### 4. `webpack`如何实现懒加载
- `import()`
- 结合`Vue` `React`异步组件
- 结合`Vue-router` `React-router`异步加载路由

### 5. `webpack`常见性能优化
 - 优化代码构建速度 - 开发体验和效率
    - 优化`babel-loader`
    - `IgnorePlugin`
    - `noParse`
    - `happyPack`
    - `ParallelUgifyPlugin`
    - 自动刷新
    - 热跟新
    - `DllPlugin`

 - 优化产出代码 - 产品性能
   - 体积更小
   - 合理分包，不重复加载
   - 速度更快，内存使用更小
   - 小图片`base64`编码
   - `bundle`加`hash`
   - 懒加载
   - 提取公共代码
   - `IngorePlugin`
   - 使用`CDN`加速
   - 使用`production`
   - `Scope Hosting`


#### 优化代码构建速度 - 开发体验和效率
- 优化`babel-loader`
  - ```js
    {
      test:/\.js$/,
      use:['babel-loader?cacheDirectory'], //开启缓存
      include:path.resolve(__dirname,'src')  // 明确范围
      // exclude:path.resolve(__dirname,'node_modules')
    }
    
  ```
- `IgnorePlugin`
- `noParse`
- `happyPack` (多进程打包)
  - `JS`单线程，开启多进程打包
  - 提高构建速度(特别是多核`CPU`)
- `ParallelUgifyPlugin` (多进程压缩`JS`)
  - `webpack`内置`Uglify`工具压缩`JS`
  - `JS`单线程，开启多进程压缩更快
  - 和`happyPack`同理
- (关于开启多进程)
  - 项目较大，打包较慢，开启多进程能提高速度
  - 项目较小，打包很快，开启多进程会降低速度(进程开销)
- 自动刷新
- 热跟新
  - 自动刷新：整个网页全部刷新，速度较慢
  - 自动刷新：整个网页全部刷新，状态会丢失
  - 热更新：新代码生效，网页不刷新，状态不丢失
- `DllPlugin` (动态链接库插件)
  - 前端框架如`vue` `React`,体积大，构建慢
  - 较稳定，不常升级版本
  - 同一个版本只构建一次即可，不用每次都重新构建
  - `webpack`已内置`DllPlugin`支持
  - `DllPlugin` - 打包出`dll`文件
  - `DllReferencePlugin` - 使用`dll`文件  

### 6. `babel-runtime`和`babel-polyfill`的区别
- `babel-polyfill`会污染全局
- `babel-runtime`不会污染全局
- 产出第三方`lib`要用`babel-runtime`

### 7. `babel`和`webpack`的区别
 - `babel` —— `JS`新语法编译工具，不关心模块化
 - `webpack` —— 打包构建工具，是多个`loader plugin`的集合 

### 8. 为何`proxy`不能被`Polyfill`
 - 如 `Class` 可以用 `function`模拟
 - 如 `Promise` 可以用 `callback` 来模拟
 - 但 `Proxy` 的功能用 `Object.defineProperty` 无法模拟
