var http = require('http')

var server = http.createServer()

server.on('request',function(request,response){
  console.log('收到客户端的请求了，请求路径是：'+request.url);

  response.write('hello')
  response.write('node.js')

  response.end()
})

server.listen(3000,function(){
  console.log('服务器启动成功了，可以通过 http://127.0.0.1:3000/ 来进行访问');
})