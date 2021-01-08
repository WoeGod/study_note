let arr = [2,1,0,-1,3,6,4]

for(let i = 0; i < arr.length - 1 ; i++){
  let flag = false
  for(let j = 0; j < arr.length - 1; j++){
    if(arr[j] > arr[j+1]){
      [arr[j],arr[j+1]] = [arr[j+1],arr[j]]
      flag = true
    }
  }
  if(flag){
    break
  }
}

console.log(arr);