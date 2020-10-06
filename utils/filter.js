// 价格格式化
export function formatPrice(price){
  if(typeof price !== "number"){
    price = Number(price) || 0;
  }
  return "¥" + price.toFixed(2)
}

// =========时间戳转换 start===========

// 1970-01-01
export function toDate(time){
  var date = new Date(time*1000 + 8 * 3600 * 1000);
  return date.toJSON().substr(0, 10).replace('T', ' ').replace(/-/g, '-');
}
 
//  00:00
export function toTime(time){
    var date = new Date(time*1000 + 8 * 3600 * 1000);
    return date.toJSON().toString().slice(11,16);
}

// 1970-01-01 00:00
export function toDateTime(time){
  var date = new Date(time*1000 + 8 * 3600 * 1000);
  return date.toJSON().substr(0, 16).replace('T', ' ').replace(/-/g, '-');
}
// =========时间戳转换 end===========

// 华氏度转摄氏度
export function toTemp(temp) {
  if (temp) {
    if (store.getters.is_centigrade == '2') {
      return ((temp * 9) / 5 + 32).toFixed(2) + '℉'
    } else {
      return temp.toFixed(2) + '℃'
    }
  }
}