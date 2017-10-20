import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Router, hashHistory, HashRouter, Route } from 'react-router-dom'
import Home from './pages/home/index'
import { defaultCarousel } from './pages/carousel'
import 'antd/dist/antd.css'
import "./style/index.less"

ReactDOM.render(
	(
		<HashRouter history={hashHistory}>
			<div className="router-list">
				<Route exact path="/" component={Home} />
				{/*轮播图*/}
				<Route path="/carousel/default" component={defaultCarousel} />
			</div>
		</HashRouter>
	),
	document.getElementById('example')
);