import React from 'react'
import './App.scss'
import { Router, Route, Redirect } from 'react-router-dom'
import Login from './pages/Login'
import history from './utils/hooks/history'
import Layout from './pages/Layout'
import Video from './pages/Video'
import Test from './pages/Test'
function App() {
	return (
		<Router history={history}>
			<div className="app">
				{/* <Icon
					type="icon-lvyoudongtai"
					onclick={() => {
						return console.log('点击了icon')
					}}
				></Icon>
				<Icon type="icon-lvyoudongtai"></Icon> */}
				<Route exact path="/" render={() => <Redirect to="/home" />}></Route>
				<Route path="/login" component={Login} />
				<Route path="/home" component={Layout} />
				<Route path="/video" component={Video} />
				<Route path="/test" component={Test} />
			</div>
		</Router>
	)
}

export default App
