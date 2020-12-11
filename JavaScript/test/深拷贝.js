function deepCopy(obj){
  if(typeof obj == 'object'){
    let cloneobj = obj.constructor == Array ? [] : {}
    for (let i in obj){
      cloneobj [i] = typeof obj[i] == 'object' ? deepCopy(obj[i]):obj[i]
    }
    return cloneobj;
  }
  else {
    return obj
  }
}

// function deepCopy(obj){
//   //判断是否是简单数据类型，
//   if(typeof obj == "object"){
//       //复杂数据类型
//       var result = obj.constructor == Array ? [] : {};
//       for(let i in obj){
//           result[i] = typeof obj[i] == "object" ? deepCopy(obj[i]) : obj[i];
//       }
//   }else {
//       //简单数据类型 直接 == 赋值
//       var result = obj;
//   }
//   return result;
// }

var schedule = {"status":21,"msg":"ok","data":[{"name":"lemon","age":21,"contactList":{"phone":[152,153,154],"email":5295}},{"name":"lara","age":22,"contact":{"phone":152,"email":5295}}]}

console.log(deepCopy(schedule)) 