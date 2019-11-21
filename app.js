App({

  /**
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   */
  onLaunch: function () {
    console.log("onLaunch被调用")
  },

  /**
   * 当小程序启动，或从后台进入前台显示，会触发 onShow
   */
  onShow: function (options) {
    //根据小程序的不同打开方式作出相应的操作
    switch(options.scene){
      case 1001:
        break;
      case 1005:
        break;
    }
    console.log("onShow被调用....")
    console.log(options)
    //获取用户信息的方式...
    wx.getUserInfo({
      success:function(res){
        console.log("onshow.....")
        console.log(res)
      }
    })
  },

  /**
   * 当小程序从前台进入后台，会触发 onHide
   */
  onHide: function () {
    console.log("onHide被调用...........")
  },

  /**
   * 当小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息
   */
  onError: function (msg) {
    console.log("onError被调用........")
  }
  ,
  //全局变量,程序中的所有页面都可以通过获取app对象的方式获取到该数据
  globalData:{
    name:'走在冷风中',
    age:25
  }
})
