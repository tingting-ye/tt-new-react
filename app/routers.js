import React from 'react'
import { Route, IndexRoute, Redirect } from 'react-router'
import Home from './pages/home/index'
import Welcome from './pages/welcome'
import notFound from './notFound'
import { defaultCarousel, initCarousel } from './pages/carousel'
import { drift, zoom, rotate, blur, moreTime, changeState, svgLine, svgDeformation } from './pages/motion'
import { defaultText,propTypesText } from './pages/text'
import { defaultLifecycle } from './pages/lifecycle'
import { defaultIinteractive } from './pages/interactive'
const routers = (
  <Route>
    <Route path="/" component={Home}>
      <IndexRoute component={Welcome} />
      {/* 数据测试 */}
      <Route path="/text$/default" component={defaultText} />
      <Route path="/text$/propTypes" component={propTypesText} />
      {/* 生命周期 */}
      <Route path="/lifecycle$/default" component={defaultLifecycle} />
      {/* 交互动画 */}
      <Route path="/interactive$/default" component={defaultIinteractive} />
      {/* 单元素动画 */}
      <Route path="/motion$/tweenOne$/drift" component={drift} />
      <Route path="/motion$/tweenOne$/zoom" component={zoom} />
      <Route path="/motion$/tweenOne$/rotate" component={rotate} />
      <Route path="/motion$/tweenOne$/blur" component={blur} />
      <Route path="/motion$/tweenOne$/moreTime" component={moreTime} />
      <Route path="/motion$/tweenOne$/changeState" component={changeState} />
      <Route path="/motion$/tweenOne$/svgLine" component={svgLine} />
      <Route path="/motion$/tweenOne$/svgDeformation" component={svgDeformation} />
      {/* 轮播图 */}
      <Route path="/carousel$/default" component={defaultCarousel} />
      <Route path="/carousel$/initCarousel" component={initCarousel} />
      {/* 无匹配页面 */}
      <Route path="*" component={notFound} />
    </Route>
  </Route>
)
export default routers
