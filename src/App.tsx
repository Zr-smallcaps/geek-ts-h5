import React from 'react'
import { Button, Space } from 'antd-mobile'
import './App.scss'
import { Router, Route, Redirect } from 'react-router-dom'
import Login from './pages/Login'
import Home from './pages/Home'
import history from './utils/hooks/history'
import Icon from '@/components/Icon'
function App() {
	return (
		<Router history={history}>
			<div className="app">
				<Icon
					type="icon-lvyoudongtai"
					onclick={() => {
						return console.log('点击了icon')
					}}
				></Icon>
				<Icon type="icon-lvyoudongtai"></Icon>
				<Route exact path="/" render={() => <Redirect to="/home" />}></Route>
				<Route path="/login" component={Login} />
				<Route path="/home" component={Home} />
			</div>
		</Router>
	)
}

export default App
