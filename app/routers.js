import React from 'react'
import { Route, IndexRoute } from 'react-router'
import Home from './pages/home/index'
import notFound from './notFound'
// import { draggableText, draggableTable, draggableLabel } from './Draggable'
// import { defaultCarousel } from './carousel'
// import { action1 } from './action'
// import { datasheet, text } from './other'
const routers = (
    <Route exact path="/" component={Home}>
      {/*拖拽功能*/}
      {/*<Route path="/draggable/text" component={draggableText} />
      <Route path="/draggable/table" component={draggableTable} />
      <Route path="/draggable/label" component={draggableLabel} />*/}
      {/*轮播图*/}
      {/*<Route path="/carousel/default" component={defaultCarousel} />*/}
      {/*动画*/}
      {/*<Route path="/action/action1" component={action1} />*/}
      {/*其他*/}
      {/*<Route path="/other/datasheet" component={datasheet} />
      <Route path="/other/text" component={text} />*/}

      {/*无模块*/}
      {/*<Route path="*" component={notFound} />*/}
    </Route>
)
export default routers