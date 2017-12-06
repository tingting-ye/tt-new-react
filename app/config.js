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
        url: '/motion$/tweenOne$/drift',
        children: [
          {
            id: 21,
            name: '位移效果',
            url: '/motion$/tweenOne$/drift',
            children: []
          },
          {
            id: 22,
            name: '缩放效果',
            url: '/motion$/tweenOne$/zoom',
            children: []
          },
          {
            id: 23,
            name: '旋转效果',
            url: '/motion$/tweenOne$/rotate',
            children: []
          },
          {
            id: 24,
            name: '模糊效果',
            url: '/motion$/tweenOne$/blur',
            children: []
          },
          {
            id: 25,
            name: '时间轴效果',
            url: '/motion$/tweenOne$/moreTime',
            children: []
          },
          {
            id: 26,
            name: '变更动画效果',
            url: '/motion$/tweenOne$/changeState',
            children: []
          },
          {
            id: 27,
            name: 'svg 线性动画',
            url: '/motion$/tweenOne$/svgLine',
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
