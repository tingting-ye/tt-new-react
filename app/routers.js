import React from 'react'
import {Route, IndexRoute, Redirect} from 'react-router'
import Home from './pages/home/index'
import Welcome from './pages/welcome'
import notFound from './notFound'
import {defaultCarousel, initCarousel} from './pages/carousel'
import {drift} from './pages/motion'
const routers = (
  <Route>
    <Route path="/" component={Home}>
      <IndexRoute component={Welcome}/>

      {/* 轮播图 */}
      <Route path="/carousel$/default" component={defaultCarousel}/>
      <Route path="/carousel$/initCarousel" component={initCarousel}/>
      {/* 单元素动画 */}
      <Route path="/motion$/tweenOne$/drift" component={drift}/>
      {/* 无匹配页面 */}
      <Route path="*" component={notFound}/>
    </Route>
  </Route>
)
export default routers
