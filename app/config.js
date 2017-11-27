export default(() => {
  window.$GLOBALCONFIG = {};
  +(function (global) {
    global.NAVIGATION = [
      {
        id: 1,
        name: '首页',
        url: '/',
        children: []
      }, 
      {
        id: 2,
        name: '单元素动画',
        url: '/motion$/tweenOne',
        children: [
          {
            id: 21,
            name: '位移效果',
            url: '/motion$/tweenOne$/drift',
            children: []
          }
        ]
      }, 
      {
        id: 3,
        name: '轮播功能',
        url: '/carousel$/default',
        children: [
          {
            id: 31,
            name: '默认',
            url: '/carousel$/default',
            children: []
          }, {
            id: 32,
            name: '初始动效',
            url: '/carousel$/initCarousel',
            children: []
          }
        ]
      }
    ]
  }(window.$GLOBALCONFIG))
})()
