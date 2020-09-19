json =  `{
  el: {
    colorpicker: {
      confirm: '确定',
      clear: '清空'
    },
    datepicker: {
      now: '此刻',
      today: '今天',
      cancel: '取消',
      clear: '清空',
      confirm: '确定',
      selectDate: '选择日期',
      selectTime: '选择时间',
      startDate: '开始日期',
      startTime: '开始时间',
      endDate: '结束日期',
      endTime: '结束时间',
      prevYear: '前一年',
      nextYear: '后一年',
      prevMonth: '上个月',
      nextMonth: '下个月',
      year: '年',
      month1: '1 月',
      month2: '2 月',
      month3: '3 月',
      month4: '4 月',
      month5: '5 月',
      month6: '6 月',
      month7: '7 月',
      month8: '8 月',
      month9: '9 月',
      month10: '10 月',
      month11: '11 月',
      month12: '12 月',
      // week: '周次',
      weeks: {
        sun: '日',
        mon: '一',
        tue: '二',
        wed: '三',
        thu: '四',
        fri: '五',
        sat: '六'
      },
      months: {
        jan: '一月',
        feb: '二月',
        mar: '三月',
        apr: '四月',
        may: '五月',
        jun: '六月',
        jul: '七月',
        aug: '八月',
        sep: '九月',
        oct: '十月',
        nov: '十一月',
        dec: '十二月'
      }
    },
    select: {
      loading: '加载中',
      noMatch: '无匹配数据',
      noData: '无数据',
      placeholder: '请选择'
    },
    cascader: {
      noMatch: '无匹配数据',
      loading: '加载中',
      placeholder: '请选择',
      noData: '暂无数据'
    },
    pagination: {
      goto: '前往',
      pagesize: '条/页',
      total: '共 {total} 条',
      pageClassifier: '页'
    },
    messagebox: {
      title: '提示',
      confirm: '确定',
      cancel: '取消',
      error: '输入的数据不合法!'
    },
    upload: {
      deleteTip: '按 delete 键可删除',
      delete: '删除',
      preview: '查看图片',
      continue: '继续上传'
    },
    table: {
      emptyText: '暂无数据',
      confirmFilter: '筛选',
      resetFilter: '重置',
      clearFilter: '全部',
      sumText: '合计'
    },
    tree: {
      emptyText: '暂无数据'
    },
    transfer: {
      noMatch: '无匹配数据',
      noData: '无数据',
      titles: ['列表 1', '列表 2'],
      filterPlaceholder: '请输入搜索内容',
      noCheckedFormat: '共 {total} 项',
      hasCheckedFormat: '已选 {checked}/{total} 项'
    },
    image: {
      error: '加载失败'
    },
    pageHeader: {
      title: '返回'
    },
    popconfirm: {
      confirmButtonText: '确定',
      cancelButtonText: '取消'
    }
  },
  // 系统相关
  navbar: {
    logOut: '退出登录',
    dashboard: '首页',
    lang: '语言'
  },
  login: {
    title: '系统登录',
    logIn: '登录',
    username: '账号',
    password: '密码'
  },
  table: {
    title: '标题',
    search: '搜索',
    add: '添加',
    export: '导出',
    operation: '操作',
    edit: '编辑',
    delete: '删除',
    cancel: '取 消',
    complete: '完 成',
    confirm: '确 定',
    setting: '设置',
    tip: '提示',
    delete_msg: '是否确定删除该数据？',
    delete_complete: '删除成功',
    delete_fail: '删除失败',
    add_complete: '添加成功',
    add_fail: '添加失败',
    edit_complete: '修改成功',
    edit_fail: '修改失败',
    setting_complete: '设置成功',
    setting_fail: '设置失败',
    operated_complete: '操作成功', // new!!!
    operated_fail: '操作失败', // new!!!
    setting_tip: '请选择时段',
    // 表格表头
    serial_number: '序号',
    avatar: '头像',
    company: '公司',
    department: '部门',
    worker_id: '工号',
    worker_name: '姓名',
    role: '角色',
    start_date: '开始日期',
    end_date: '结束日期',
    start_time: '开始时间',
    end_time: '结束时间',
    access_control: '门禁功能',
    registration_time: '注册时间',
    remark: '备注',
    device_id: '设备号',
    device_name: '设备名称',
    ip: '服务器IP',
    port: '目标端口',
    switch: '开关',
    push_device: '推送设备',
    sync_person: '同步人员信息', // new!!!
    connect_type: '连接方式',
    shift_name: '班次名称',
    roster: '排班人员',
    // 节日设置
    holiday_name: '节日名称',
    // 加班设置
    overtime_people: '加班人员',
    overtime_name: '加班时段',
    // 加班时段设置
    overtime_period_name: '时段名称',

    // 体温管理
    temperature_setting: '体温设置',
    normal_temperature_setting: '正常体温设置',
    date: '日期',
    time: '时间',
    temperature: '体温',
    temperature_status: '体温状态',
    temperature_hight: '温度过高',
    temperature_low: '温度过低',
    normal: '正常',
    temperature_report: '体温报表',

    // 考勤报表
    batch_import: '批量导入',
    export_report: '导出报表',
    attendance_report: '考勤报表',
    view_attendance_report: '查看考勤报表',
    view_overtime_report: '查看加班报表',
    summary: '汇总',
    view_summary: '查看汇总',
    view_overtimeLate: '查看迟到/早退报表',
    worktime_period: '工作时段',
    attendance_date: '日期',
    check_time: '签到时间',
    check_out_time: '签退时间',
    late: '迟到',
    leave_early: '早退', // new!!!
    beLateAndLeave: '迟到并早退', // new!!!
    attendance_status: '考勤状态',
    total_attendance: '工作时长(分)', // new!!!
    normal_work_days: '正常出勤(天)',
    work_time_total: '上班总时长(分)',
    late_total: '迟到次数',
    late_time: '迟到时长(分)',
    leave_early_total: '早退次数',
    leave_early_time: '早退时长(分)',
    over_total: '加班次数',
    over_time: '加班时长(分)',

    language: '语言',
    language_name: '语言名称',
    language_config: '语言配置',

    toOption: '去操作',
    one: '第一步',
    two: '第二步',
    three: '第三步',
    four: '第四步',
    five: '第五步',
    six: '第六步',
    guideTip1: '局域网搜索添加连接机器如果不在一个局域网的话，外网的(广域网)机器， 一般这里需要设置就是服务器的IP地址和端口号；',
    guideTip2: '登记公司信息(添加公司名,添加部门名)',
    guideTip3: '登记员工信息(部门，工号，姓名，照片等信息(也可通过EXCEL导入))；',
    guideTip4: '上传员工信息到机器，如果是多个机器，那么选择哪个机器就上传到哪个机器，不选择不上传',
    guideTip5: '考勤班次设置-班次设置-排班',
    guideTip6: '可选择整个公司加班或整个部门，或部门中某个人加班.（需要提前设置加班时段)',
  },
  // 菜单栏
  menu: {
    home: '首页',
    authority: '权限管理',
    role: '角色管理',
    manage: '管理员管理', // new!!!
    equipment: '设备管理',
    LAN_device_scan: '局域网设备扫描',
    open_door_remotely: '远程开门',
    OTA_upgrade: 'OTA升级',
    organization: '组织管理',
    staff: '员工管理',
    attendance_settings: '考勤管理',
    attendance_shift: '考勤班次',
    holiday_setting: '节日设置',
    overtime_setting: '加班设置',
    overtime_period_setting: '加班时段设置',
    temperature: '体温管理',
    statistical_report: '统计报表',
    attendance_report: '考勤报表',
    overtime_report: '加班报表',
    access_records: '出入记录报表',
    late_and_leave_early_report: '迟到/早退报表',
    system_settings: '多语言设置',
    quick_start: '快速入门',
    instructions: '使用说明'
  },
  // 首页
  home: {
    today_attendance_statistics: '今日考勤统计',
    should_attend: '应到人数',
    number_of_attendance: '考勤人数',
    number_of_absentees: '缺勤人数',
    today_temperature_statistics: '今日体温统计',
    number_of_people_taking_temperature: '测温人数',
    number_of_normal_body_temperature: '体温正常人数',
    number_of_abnormal_body_temperature: '体温异常人数'
  },
  // 权限管理
  authority: {
    role_name: '角色名称',
    role_mark: '角色标识',
    authority: '权限',
    all: '全部',
    add: '添加（不能重复）',
    edit: '编辑（不能重复）',
    username: '用户名',
    nickname: '昵称',
    phone: '手机',
    status: '账号状态',
    on: '启用',
    off: '禁用',
  },
  // 设备管理
  equipment: {
    scanning: '扫描',
    configure_in_batch: '批量配置设备',
    switch: '开门',
    push: '推送',
    sync: '同步', // new!!!
    OTA_upgrade: 'OTA升级',
    upload_OTA: '上传OTA更新包',
    // 加班设置
    device_id: '设备号',
    device_name: '设备名称',
    open_door_continue_time: '开门持续时间',
    camera_detect_type: '活体开关',
    face_feature_pair_number: '面部识别阀值',
    open_door_type: '验证方式',
    type_living: '活体',
    type_no_living: '非活体',
    type_face: '人脸',
    type_temperature: '温度+(人脸或IC卡)',
    type_stranger: '温度+(人脸或IC卡)(陌生人可测温)',
    device_ip_setting: '设备设置',
    server_ip: '服务器IP地址',
    subnet_ip: '子网掩码',
    gateway: '默认网关',
    dns: '首选DNS',
    dns_alter: '备用DNS',
    port: '服务器端口',
    normal_temp: '正常体温范围', // new!!!
    low_temp: '低温阈值' // new!!!
  },
  // 组织管理
  organization: {
    add_company: '添加公司',
    add_department: '添加部门',
    company_list: '公司列表'
  },
  // 员工管理
  staff: {
    import_template_download: '导入模板下载',
    batch_import: '批量导入',
    employee_card_id: '门禁卡号',
    img_enc: '图片加密',
    gender: '性别',
    is_departure: '是否离职',
    departure_time: '离职日期',
    staff_report: '员工报表', // new!!!
    sex: '性别', // new!!!
    man: '男', // new!!!
    women: '女', // new!!!
    permiss_role: '权限角色', // new!!!
    shcedule: '默认班次', // new!!!
    access_authorization: '门禁授权', // new!!!
    all_device: '所有设备', // new!!!
    yes: '是', // new!!!
    no: '否', // new!!!
    upload: '上传', // new!!!
    import_tip1: '提示：上传图片在文件上传,图片名改成该员工的工号，如工号为 1001的员工，图片名：1001.jpg', // new!!!
    import_tip2: '将excel文件放在这里', // new!!!
    import_tip3: '请不要上传超过1M的文件' // new!!!
  },
  // 考勤管理
  attendance: {
    // 考勤班次
    view: '查看',
    time_period: '时段名',
    time_period_setting: '时段设置',
    add_time_period: '新增时段',
    delete_time_period: '删除时段',
    check_start_time: '签到开始',
    work_time: '上班',
    off_work_time: '下班',
    check_out_time: '签退结束',
    need_clock_on: '上班需打卡',
    need_clock_off: '下班需打卡',
    late_log: '计迟到',
    leave_early_log: '记早退',
    attendance_setting: '考勤设置',
    late_minute: '签到延时时间：',
    leave_early_minute: '签退提前时间：',
    min: '分钟',
    week_setting: '周末设置',
    am: '上午',
    pm: '下午',
    sun: '星期日',
    mon: '星期一',
    tue: '星期二',
    wed: '星期三',
    thur: '星期四',
    fir: '星期五',
    sat: '星期六',
    // 加班设置
    search_worker_name: '输入工号查询',
    overtime_setting: '加班时间设置',
    overtime_time: '加班时长'
  },
  // 体温管理：
  temperature: {
    temperature_setting: '体温设置',
    normal_setting: '正常体温设置'
  },

  validation: {
    format: '格式不正确',
    device_id: '请输入设备号',
    device_name: '请输入设备名称',
    open_door_continue_time: '请输入开门持续时间',
    camera_detect_type: '请选择活体开关',
    open_door_type: '请选择验证方式',
    server_ip: '请输入服务器IP地址',
    subnet_ip: '请输入子网掩码',
    gateway: '请输入默认网关',
    dns: '请输入首选DNS',
    dns_alter: '请输入备用DNS',
    port: '请输入服务器端口',
    company: '请选择公司',
    company1: '请输入公司名称',
    department1: '请选择部门', // new!!!
    department: '请输入部门名称',
    shift_name: '请输入班次名称',
    holiday_name: '请输入节日名称',
    select_data: '请选择日期',
    remark: '请输入备注',
    overtime: '请选择加班时段',
    overtime_period_name: '请输入时段名称',
    language: '请输入语言名称',
    language_config: '请输入语言配置',
    normal_temp: '请输入正常体温范围',
    low_temp: '请输入低温阈值',
    worker_name: '请输入姓名', // new!!!
    worker_id: '请输入工号', // new!!!
    employee_card: '请输入门禁卡号', // new!!!
    is_encrypt: '请选择图片是否加密', // new!!!
    sex: '请选择性别', // new!!!
    role: '请选择权限角色', // new!!!
    departure: '请选择是否离职', // new!!!
    access_authorization: '请选择活动区域', // new!!!
    shcedule: '请选择班次', // new!!!
    img_tip1: '上传头像图片只能是 JPG/PNG 格式!', // new!!!
    img_tip2: '上传头像图片大小不能超过 2MB!', // new!!!
    status: '请选择状态',
    authority: '请选择权限',
    nickname: '昵称不能为空',
    phone: '手机号不能为空',
    password: '用户密码不能为空',
    role_id: '管理权限不能为空',
  }

}
`

obj = {
  name:'wwj',
  age:'18'
}


let name = '简体中文'
let str = JSON.stringify(obj)

console.log(str);