import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Router, hashHistory, HashRouter, Route } from 'react-router-dom'
import Home from './pages/home/index'
import 'antd/dist/antd.css'
import "./style/index.less"

ReactDOM.render(
	(
		<HashRouter history={hashHistory}>
			<Route exact path="/" component={Home} />
		</HashRouter>
	),
	document.getElementById('example')
);