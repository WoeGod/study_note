# HTTP
### 1. `http`常见的状态码有哪些

### 2. `http`常见的`header`有哪些

### 3. 什么是`Restful API`

### 4. 描述一下`http`的缓存机制(重要)

# 解析
### 1. `http`常见的状态码有哪些
 - `1xx` 服务器收到请求
 - `2xx` 请求成功，如 200
 - `3xx` 重定向，如302
 - `4xx` 客户端错误，如 404
 - `5xx` 服务端错误，如 500


状态码 |	中文描述
--|--
200 | 请求成功
301 |	永久重定向(配合`location`,浏览器自动处理)
302 |	临时重定向(配合`location`,浏览器自动处理)
304 | 资源未被修改
403 | 没有权限
404 | 资源未找到
500 | 服务器错误
504 | 网关超时

### 2. 什么是`Restful API`
 - `get`        获取数据
 - `post`       新建数据
 - `patch/put`  更新数据
 - `delete`     删除数据

### 3. `http`常见的`header`有哪些
 - 常见的`Request Headers`
   - `Accept`:  浏览器可接收的数据格式
   - `Accept-Encoding`:  浏览器可接收的压缩算法,如`gzip`
   - `Accept-Languange`:  浏览器可接收的语言,如`zh-CN`
   - `Connection` :  `keep-alive` 一次`TCP`连接重复使用
   - `cookie`
   - `Host`
   - `User-Agent`:(简称`UA`)浏览器信息
   - `Content-type`:发送数据的格式,如`application/json`

 - 常见的`Response Headers`
   - `Content-type`: 返回数据的格式,如`application/json`
   - `Content-length`:返回数据的大小,多少字节
   - `Content-Encoding`: 返回数据的压缩算法,如`gzip`
   - `Set-Cookie`    

 - 缓存相关的`headers`
   - `Cache-Control`
   - `Expires`
   - `Last-Modified`
   - `If-Modified-Since`
   - `Etag`
   - `If-None-Match`

## `http` 缓存
 - 关于缓存的介绍
   - 什么是缓存? 
   - 为什么需要缓存?
   - 哪些资源可以被缓存? ——静态资源(`js` `css` `img`)
 - `http`缓存策略(强制缓存 + 协商缓存)
 - 刷新操作方式, 对缓存的影响

### 强制缓存

![强制缓存图示](https://img-blog.csdnimg.cn/20201214212412102.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L0dyYW5lcnk=,size_16,color_FFFFFF,t_70)

 ![缓存失效](https://img-blog.csdnimg.cn/20201214212645598.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L0dyYW5lcnk=,size_16,color_FFFFFF,t_70)


- `Cache-Control`
  - `Response Headers`中
  - 控制强制缓存的逻辑
  - 例如 `Cache-Control: max-age = 31536000(单位是秒)`
    - `Cache-Control`的值
      - `max-age`
      - `no-cache`
      - `no-store`
      - `private`
      - `public`

- `Expires`
  - 同在`Response Headers`中
  - 同为控制缓存过期
  - 已被`Cache-Constorl`代替

### 协商缓存
 - 服务器端缓存策略
 - 服务器判断客户端资源, 是否和服务端资源一样
 - 一致则返回 304, 否则返回 200 和最新的资源

![协商缓存](https://img-blog.csdnimg.cn/20201214214726712.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L0dyYW5lcnk=,size_16,color_FFFFFF,t_70)

 - 资源标识
   - 在`Response Header`中,有两种
   - `Last-Modified`资源最后修改时间
   - `Etag`资源的唯一标识(一个字符串,类似人类到指纹) 
 - `Last-Modified`和`Etag`
   - 会优先使用`Etag`
   - `Last-Modified`只能精确到秒级
   - 如果资源被重复生成，而内容不变，则`Etag`更精确

   ![Last-Modified](https://img-blog.csdnimg.cn/20201214233249876.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L0dyYW5lcnk=,size_16,color_FFFFFF,t_70)

  ![Etag](https://img-blog.csdnimg.cn/2020121423335876.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L0dyYW5lcnk=,size_16,color_FFFFFF,t_70)

  ![Headers示例](https://img-blog.csdnimg.cn/20201214233625315.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L0dyYW5lcnk=,size_16,color_FFFFFF,t_70)

![综述](https://img-blog.csdnimg.cn/20201214234032381.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L0dyYW5lcnk=,size_16,color_FFFFFF,t_70)


## 三种刷新操作
 - 正常操作：地址栏输入`url`，跳转链接，前进后退等
 - 手动刷新：F5，点击刷新按钮，右击菜单刷新
 - 强制刷新：ctrl + F5

### 不同刷新操作，不同的缓存策略
 - 正常操作：强制缓存有效，协商缓存有效
 - 手动刷新：强制缓存失效，协商缓存有效
 - 强制刷新：强制缓存失效，协商缓存失效