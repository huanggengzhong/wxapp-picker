// pages/lookhouse/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isShow_04: false,

    listData_04: [ //第一列
      [{
        date: '日期',
        id: 0,
        str: '8-2'
      }, {
        date: '日期',
        id: 1,
        str: '8-3'
      }],

      [{ //第二列
        id: 0,
        time: '时间',
        str: '上午12:00前'
      }, {
        id: 0,
        time: '时间',
        str: '下午12:00-18:00'
      }]
    ],
    picker_04_data: [],

  },
  // 获取当天
  getToday: function getNowFormatDate() {
    var date = new Date();
    var seperator1 = "月";

    var month = date.getMonth() + 1;
    var strDate = date.getDate() + 1; //明天就加1

    var currentdate = month + seperator1 + strDate;
    return currentdate;
  },

  //点击picker
  showPicker_04: function() {
    var that=this;
    this.setData({
      isShow_04: true
    })

  

    // 设置第一项时间
    var date = new Date();




    var currentHours = date.getHours();


    var currentYear = date.getFullYear();
    var myDate;
    var weekDay = ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"];
    // 设置第一项和第二项
    var seperator1="月"
    var seperator2="日"
    var month=date.getMonth()+1;//得到当月
    var strDate1=date.getDate()//今天
    var strDate2=date.getDate()+1//明天
    var today = month + seperator1 + strDate1 + seperator2
    var tomorrow = month + seperator1 + strDate2 + seperator2

    var monthDay = [today + ' 今天', tomorrow+' 明天'];
    // 月-日
    for (var i = 2; i <= 60; i++) { //循环100天吧,需要的话可以改
      var date1 = new Date(date);
      date1.setDate(date.getDate() + i);
      var yMd = currentYear + "-" + (date1.getMonth() + 1) + "-" + date1.getDate()
      myDate = new Date(Date.parse(yMd.replace(/-/g, "/")));
      yMd = weekDay[myDate.getDay()]
      var md = (date1.getMonth() + 1) + seperator1 + date1.getDate() + seperator2;
      monthDay.push(md + " " + yMd);
    }
    console.log(monthDay)
    //把所有日期加入到data里
    var newList = []
    monthDay.forEach((v,i)=>{
      newList.push(
        {
          date: '日期',
          id:i,
          str: v
        }
      )
        
      
    })
    console.log(newList)
    that.setData({
      listData_04: [newList, [{ //第二列
        id: 0,
        time: '时间',
        str: '上午12:00前'
      }, {
        id: 0,
        time: '时间',
        str: '下午12:00-18:00'
      }]]
    })
  },
  sureCallBack_04(e) {
    let data = e.detail
    this.setData({
      isShow_04: false,
      picker_04_data: JSON.stringify(e.detail.choosedData),
      picker_04_index: JSON.stringify(e.detail.choosedIndexArr)
    })
  },
  cancleCallBack_04() {
    this.setData({
      isShow_04: false,
    })
  }
})