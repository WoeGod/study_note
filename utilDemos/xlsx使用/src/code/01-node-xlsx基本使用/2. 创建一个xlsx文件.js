var xlsx = require('node-xlsx');
var fs = require('fs');

// Or var xlsx = require('node-xlsx').default;

const data = [[1, 2, 3], [true, false, null, 'sheetjs'], ['foo', 'bar', new Date('2014-02-19T14:30Z'), '0.3'], ['baz', null, 'qux']];
var buffer = xlsx.build([{name: "mySheetName", data: data}]); // Returns a buffer
console.log(buffer);

fs.writeFileSync('./src/testFile/test.xlsx',buffer,{'flag':'w'})