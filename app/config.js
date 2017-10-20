export default (() => {
  window.$GLOBALCONFIG = {};
  +function (global) {
    global.NAVIGATION = [
      {
        id: 1,
        name: '首页',
        url: '/',
        children: [],
      },{
        id: 3,
        name: '轮播功能',
        url: '/carousel',
        children: [
          {
            id: 31,
            name: '默认',
            url: '/carousel/default',
            children: [],
          },
        ],
      }
    ]
  }(window.$GLOBALCONFIG)
})()
