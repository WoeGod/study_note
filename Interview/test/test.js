obj = {
  a:1,
  b:2
}
var honray = obj
honray.a = 2
honray.b = 1

console.log(honray)
console.log(honray.a)
console.log(obj.a)
console.log(obj.b)