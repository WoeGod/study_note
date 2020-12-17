function debounce(fn,delay = 500){
  let timer = null
  return function (){
    if(timer){
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      fn.apply(this,arguments)
      timer = null
    },delay)
  }
}
function throttle(fn,delay = 500){
  let timer = null
  return function (){
    if(timer){
      return
    }
    timer = setTimeout(() => {
      fn.apply(this,arguments)
      timer = null
    },delay)
  }
}