// 1.加载http核心模块
var http = require('http')

// 2. 使用 http.createServer() 方法创建一个 Web 服务器
//    返回一个 Server 实例
var server = http.createServer()

// 3
server.on('request', function(){
  console.log('收到客户端信息了');
})

// 4. 绑定端口号，启动服务器
server.listen(3000,function(){
  console.log('服务器启动成功，可以通过 http://127.0.0.1:3000/ 来进行访问');
})