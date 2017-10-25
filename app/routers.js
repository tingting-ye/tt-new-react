import React from 'react'
import { Route } from 'react-router'
import Home from './pages/home/index'
import { defaultCarousel } from './pages/carousel'
const routers = (<Route>
  <Route path="/" component={Home}>
    {/*轮播图*/}
    <Route path="/carousel/default" component={defaultCarousel} />
  </Route>
</Route>
)
export default routers