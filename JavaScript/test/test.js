function getByteLen(val) {    //传入一个字符串
  var len = 0;
  for (var i = 0; i < val.length; i++) {
      if (val[i].match(/[^\x00-\xff]/ig) != null) //全角 
          len += 2; //如果是全角，占用两个字节  如果mysql中某字段是text, 如果设置编码为utf-8,那么一个中文是占3个字节, gbk是两个字节
      else
          len += 1; //半角占用一个字节
  }
  return len;
}   

console.log(getByteLen('shtëpia')); 