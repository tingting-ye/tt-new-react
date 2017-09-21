export default (() => {
  window.$GLOBALCONFIG = {};
  +function (global) {
    global.NAVIGATION = [
      {
        id: 1,
        name: '首页',
        url: '/',
        children: [],
      }
    ]
  }(window.$GLOBALCONFIG)
})()
