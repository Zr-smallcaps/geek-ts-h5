import React, { useEffect, useMemo, useState } from 'react'
import { Image, Space, Button } from 'antd-mobile'
import userinfo from '@/assets/photo/smallcaps.jpg'
import { Grid } from 'antd-mobile'
import styles from './index.module.scss'
import Icon from '@/components/Icon'
import { useDispatch, useSelector } from 'react-redux'
import { profile } from '@/store/actions/profile'
import { RootState } from '@/type/store'
import { stat } from 'fs'

function Profile() {
	const [count, setCount] = useState(1)
	const [isActive, IsSetsActive] = useState(true)
	// const getNum = () => {
	// 	let arr = Array.from([1, 2, 3], (element, index) => {
	// 		return element * 3
	// 	}).reduce((item1, item2) => {
	// 		console.log(item1, item2)
	// 		return item1 + item2
	// 	}, 12)
	// 	console.log(arr)
	// }
	const dispatch = useDispatch()
	useEffect(() => {
		dispatch(profile())
	}, [])
	const user = useSelector((state: RootState) => {
		return state.profile.user
	})
	return (
		<div className={styles.root}>
			{/* <Button onClick={getNum}>点击获取</Button> */}
			<div className="profile">
				<div className="user-info">
					<div className="uesr-photo">
						<Image src={user.photo} width={64} height={64} fit="cover" style={{ borderRadius: 32 }} />
					</div>
					<div className={'user-name'}>{user.name}</div>
					<div className={'user-more-info'}>
						<span>个人信息</span>
						<Icon
							type="icon-Right"
							onclick={() => {
								return console.log('点击了icon')
							}}
						></Icon>
					</div>
				</div>
				{/* 今日阅读 */}
				<div className="read-time">
					<Icon type="icon-chanpinmaihuobiji"></Icon>
					今日阅读 <span>10</span>分钟
				</div>
				{/* 动态关注粉丝被赞 */}

				<Grid columns={4} gap={8}>
					<Grid.Item>
						<div className="count-item">
							<p>{user.art_count}</p>
							<p>动态</p>
						</div>
					</Grid.Item>
					<Grid.Item>
						<div className="count-item">
							<p>{user.follow_count}</p>
							<p>关注</p>
						</div>
					</Grid.Item>
					<Grid.Item>
						<div className="count-item">
							<p>{user.fans_count}</p>
							<p>粉丝</p>
						</div>
					</Grid.Item>
					<Grid.Item>
						<div className="count-item">
							<p>{user.like_count}</p>
							<p>被赞</p>
						</div>
					</Grid.Item>
				</Grid>
				{/* 消息通知收藏 浏览历史 我的作品 */}
				<div className="user-tech">
					<Grid columns={4} gap={8}>
						<Grid.Item>
							<div className="tech-item">
								<Icon type="icon-shoucang" className="profile-icon"></Icon>
								<p>消息通知</p>
							</div>
						</Grid.Item>
						<Grid.Item>
							<div className="tech-item">
								<Icon type="icon-shoucang" className="profile-icon"></Icon>
								<p>收藏</p>
							</div>
						</Grid.Item>
						<Grid.Item>
							<div className="tech-item">
								<Icon type="icon-shoucang" className="profile-icon"></Icon>
								<p>浏览历史</p>
							</div>
						</Grid.Item>
						<Grid.Item>
							<div className="tech-item">
								<Icon type="icon-shoucang" className="profile-icon"></Icon>
								<p>我的作品</p>
							</div>
						</Grid.Item>
					</Grid>
				</div>
				{/* 更多服务 */}
				<div className="more-service">
					<h3>更多服务</h3>
					<div className="service-list">
						<div className="service-item">
							<Icon type="icon-a-tongzhigonggao3x" />
							<div>用户反馈</div>
						</div>
						<div className={isActive ? 'active service-item' : 'service-item'}>
							<Icon type="icon-wode-01" />
							<div>小智同学</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Profile
