var xlsx = require('node-xlsx');
var fs = require('fs');
var path  = require('path'); 

let header = ['nickname','phone','integral','isActive','province','city','area','storeName','systemStandardName','storeStandardName']
let data = loadExcel("../../static/data.xls",header)

writeExcel('./src/testFile/test.xlsx',data.title,data.data)


//-------------------------封装方法------------------------------------
/**
 * 加载excel数据
 * @param {String} filePath 文件路径
 * @param {Array} headerAlias 标题别名 ['id','phone','name',...]
 * @returns 
 */
 function loadExcel(filePath,headerAlias) {
  // 读取数据
  let tableData = xlsx.parse(path.join(__dirname,filePath))
  // 保存标题
  let title = tableData[0].data[0]

  let dataKeys = title

  // 若传入了headerAlias则使用headerAlias
  if(headerAlias != null) {
    dataKeys = headerAlias
  }

  // 删除标题，获取表格数据
  tableData[0].data.splice(0, 1);
  let data = tableData[0].data

  let result = []

  data.forEach((item) => {
    let rowData = {}
    for(let i = 0; i < item.length; i++) {
      rowData[dataKeys[i]] = item[i] ? item[i] : ''
    }
    result.push(rowData)
  })

  return {
    title: title,
    data: result
  }
}

/**
 * 生成Excel
 * @param {String} path 保存路径
 * @param {Array} title 标题数组
 * @param {Array} data 数据
 */
function writeExcel(path,title,data) {
  let sheetData = [title]
  data.forEach( item => {
    let rowData = []
    for(key in item) {
      rowData.push(item[key])
    }
    sheetData.push(rowData)
  })

  var buffer = xlsx.build([{name: "全部", data: sheetData}]); // Returns a buffer

  fs.writeFileSync(path,buffer,{'flag':'w'})
}