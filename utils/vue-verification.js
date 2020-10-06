// 自定义手机号校验规则
let checkMobile = (rule, value, cb) => {
  const regMobile = /^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/
  if (regMobile.test(value)) {
    //合法的手机号码
    return cb()
  }
  cb(new Error('手机号码格式不正确'))
}

