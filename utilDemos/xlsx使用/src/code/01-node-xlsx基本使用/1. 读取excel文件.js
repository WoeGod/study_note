var xlsx = require('node-xlsx');
var fs = require('fs');
var path  = require('path'); 


// __dirname是获取当前文件绝对路径的全局对象。
// path.join(__dirname,'../../static/data.xls') // 使用path.join() 拼接路径

// 通过缓冲区解析xlsx，输出工作表数组
const workSheetsFromBuffer = xlsx.parse(fs.readFileSync(path.join(__dirname,'../../static/data.xls')));

// 通过文件解析xlsx，输出工作表数组
const workSheetsFromFile = xlsx.parse(path.join(__dirname,'../../static/data.xls'));