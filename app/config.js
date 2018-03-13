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
        name: '生命周期',
        url: '/lifecycle$/default',
        children: []
      }, 
      {
        id: 3,
        name: '数据测试',
        url: '/text$/default',
        children: [
          {
            id: 31,
            name: '默认',
            url: '/text$/default',
            children: []
          },
          {
            id: 32,
            name: 'propTypes校验器',
            url: '/text$/propTypes',
            children: []
          }
        ]
      },
      {
        id: 4,
        name: '单元素动画',
        url: '/motion$/tweenOne$/drift',
        children: [
          {
            id: 41,
            name: '位移效果',
            url: '/motion$/tweenOne$/drift',
            children: []
          },
          {
            id: 42,
            name: '缩放效果',
            url: '/motion$/tweenOne$/zoom',
            children: []
          },
          {
            id: 43,
            name: '旋转效果',
            url: '/motion$/tweenOne$/rotate',
            children: []
          },
          {
            id: 44,
            name: '模糊效果',
            url: '/motion$/tweenOne$/blur',
            children: []
          },
          {
            id: 45,
            name: '时间轴效果',
            url: '/motion$/tweenOne$/moreTime',
            children: []
          },
          {
            id: 46,
            name: '变更动画效果',
            url: '/motion$/tweenOne$/changeState',
            children: []
          },
          {
            id: 47,
            name: 'svg 线性动画',
            url: '/motion$/tweenOne$/svgLine',
            children: []
          },
          {
            id: 48,
            name: 'svg 形变动画',
            url: '/motion$/tweenOne$/svgDeformation',
            children: []
          }
        ]
      }, 
      {
        id: 5,
        name: '轮播功能',
        url: '/carousel$/default',
        children: [
          {
            id: 51,
            name: '默认',
            url: '/carousel$/default',
            children: []
          }, {
            id: 52,
            name: '初始动效',
            url: '/carousel$/initCarousel',
            children: []
          }, {
            id: 52,
            name: 'reactSlick',
            url: '/carousel$/slickCarousel',
            children: []
          }
        ]
      }, 
      {
        id: 6,
        name: '交互效果',
        url: '/interactive$/default',
        children: []
      }, 
    ]
  }(window.$GLOBALCONFIG))
})()
