import React from 'react'
import { Route,IndexRoute,Redirect } from 'react-router'
import Home from './pages/home/index'
import Welcome from './pages/welcome'
import { defaultCarousel } from './pages/carousel'
const routers = (<Route>
  <Route path="/" component={Home}>
    <IndexRoute component={Welcome}/>
    {/*轮播图*/}
    <Route path="/carousel" component={defaultCarousel} >
      <Redirect from={"/carousel$"} to={"/carousel$/default"}/>
      <Route path="/carousel$/default" component={defaultCarousel} />
    </Route>
  </Route>
</Route>
)
export default routers