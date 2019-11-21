// pages/home/home.js
Page({
  data:{
    name:"浪里飞",
    age:18,
    students:[
        { id: 1001, name: "kobe", age: 30},
        { id: 1002, name: "james", age: 28 },
        { id: 1003, name: "curry", age: 32 },
        { id: 1004, name: "why", age: 18 }
      ],
      counter:0
  },
  add() {
    // console.log(this.counter)
    this.setData({
      counter: this.data.counter +=1
    })
  },
  sub() {
    this.setData({
      counter:this.data.counter -= 1
    })
  },
  getInfo(event){
    console.log("-------------")
    console.log(event.detail.userInfo.nickName)
  },


  //页面生命周期函数
  onShow(){
    console.log("PageOnShow被执行!!!")
  },
  onLoad(){
    console.log("PageOnLoad被执行!!!")
  },
  onHide(){
    console.log("PageOnHide被执行!!!")
  },
  onReady(){
    console.log("PageOnReady被执行!!!")
  },
  onUnload(){
    console.log("pageOnUnload被执行!!!")
  },
  //监听其它事件
  onPullDownRefresh(){
    console.log("监听下拉刷新")
  },
  onReachBottom(){
    console.log("监听是否达到底部...")
  }
})

const app = getApp();
const name = app.globalData.name
const age = app.globalData.age
console.log(name)
console.log(age)