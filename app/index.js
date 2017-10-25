import React from 'react'
import ReactDOM from 'react-dom'
import { Router, hashHistory } from 'react-router'
import 'antd/dist/antd.css'
import "./style/index.less"
// 路由集合
import routers from './routers'

ReactDOM.render(
	(
		<Router history={hashHistory}>
			{routers}
		</Router>
	),
	document.getElementById('example')
);