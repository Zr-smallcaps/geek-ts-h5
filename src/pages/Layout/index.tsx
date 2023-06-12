import React from 'react'
import { useState } from 'react'
import { Badge, TabBar } from 'antd-mobile'
import styles from './index.module.scss'
import Icon from '@/components/Icon'
import { Route, useHistory, useLocation } from 'react-router-dom'
import Home from '@/pages/Home'
import Question from '@/pages/Question'
import Video from '@/pages/Video'
import Search from '@/pages/Search'
import Profile from '../Profile'
function Layout() {
	const history = useHistory()
	// 获取地址栏的地址
	const location = useLocation()
	const tabs = [
		{ path: '/home', icon: 'icon-shouye', text: '首页' },
		{ path: '/home/question', icon: 'icon-wenda', text: '问答' },
		{ path: '/home/video', icon: 'icon-shipin1', text: '视频' },
		{ path: '/home/profile', icon: 'icon-wode', text: '我的' }
	]
	const goOtherPage = (path: string) => {
		//console.log(path)
		return history.push(path)
	}
	return (
		<div className={styles.root}>
			<Route exact path="/home">
				<Home></Home>
			</Route>
			<Route path="/home/question" component={Question} />
			<Route path="/home/video" component={Video} />
			<Route path="/home/profile" component={Profile} />

			<TabBar
				className="tabbar"
				onChange={(value) => {
					goOtherPage(value)
				}}
				activeKey={location.pathname}
			>
				{tabs.map((item) => (
					<TabBar.Item key={item.path} icon={<Icon type={item.icon} />} title={item.text} />
				))}
			</TabBar>
		</div>
	)
}

export default Layout
