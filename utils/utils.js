/**
 * 将某个对象的一部分属性抽象成另一个对象
 * @param {Object} obj  源对象
 * @param {Array} arr  需要抽取的源对象属性值
 * @return {Object} 抽取出来的属性对象集
 */
  function pick(obj,arr) {
  return arr.reduce((iter,val) => {
    val in obj && (iter[val] = obj[val])
    return iter
  },{})
}