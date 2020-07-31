
// 缺点：写法繁琐，代码可读性不强
// for (let i = 0; i < arr.length; i++){
//   console.log(arr[i]);
// }

// 优点：简化语法
// 缺点：不能终止或者跳过
// lists.forEach(list => {
//   // if(list === 1){
//   //   continue  // 报错：SyntaxError: Illegal continue statement: no surrounding iteration statement
//                  // 使用 break 则报错：Illegal break statement
//   // }
//   console.log(list);
// })

obj = {
  name : "wu",
  age: 18,
  address: 'beijing'
}
lists = ['apple','banana','pear','watermelon','pineapple']

for (let index in lists){
  if(index ==='1'){
    continue;
  }
  console.log(index);  // 0,1,2,3,4   
}

// lists = ['apple','banana','pear','watermelon','pineapple']

// for (let list of lists){
//   console.log(list);  // apple banana pear watermelon pineapple
// }