import React, { useEffect, useRef, useState } from 'react'
import { NavBar, Form, Input, Button, Toast, InputRef } from 'antd-mobile'
import { useHistory } from 'react-router-dom'
import './index.module.scss'
import { Loginfrom } from '@/type/data'
import { useDispatch } from 'react-redux'
import { login, getCode } from '@/store/actions/login'

function Login() {
	const [Time, setTime] = useState(0)
	const history = useHistory()
	const dispatch = useDispatch()
	const onFinish = (value: Loginfrom) => {
		//	console.log(value)
		dispatch(login(value))
		Toast.show({
			content: '登录成功',
			afterClose: () => {
				history.push('/home')
			}
		})
	}
	// 获取验证码
	const [form] = Form.useForm()
	const inputRef = useRef<InputRef>(null)
	// 用于定时器的ref
	const timeRef = useRef(0)
	const onGetCode = () => {
		if (Time > 0) {
			return
		}
		const { mobile } = form.getFieldsValue(['mobile'])
		const mobileError = form.getFieldsError()
		console.log(mobile, mobileError)
		if (!mobile || mobileError[0].errors.length > 0) {
			// 验证失败时 input获取焦点
			return inputRef.current?.focus()
		}
		dispatch(getCode(mobile))
		setTime(60)
		timeRef.current = window.setInterval(() => {
			return setTime((Time) => {
				return Time - 1
			})
		}, 1000)
	}
	useEffect(() => {
		if (Time === 0) {
			clearInterval(timeRef.current)
		}
		// 返回一个函数  在组件销毁的时候清楚定时器
		return () => {
			return clearInterval(timeRef.current)
		}
	}, [Time])
	return (
		<div>
			<NavBar
				onBack={() => {
					return history.goBack()
				}}
			>
				标题
			</NavBar>
			<Form
				form={form}
				layout="horizontal"
				footer={
					<Button block type="submit" color="primary" size="large">
						登录
					</Button>
				}
				onFinish={onFinish}
			>
				<Form.Item
					name="mobile"
					label="手机号"
					rules={[
						{ required: true, message: '手机号不能为空' },
						{
							pattern: /^(?:(?:\+|00)86)?1\d{10}$/,
							message: '手机号格式错误'
						}
					]}
				>
					<Input ref={inputRef} onChange={console.log} placeholder="请输入手机号" />
				</Form.Item>
				<Form.Item
					name="code"
					label="短信验证码"
					extra={<a onClick={Time === 0 ? onGetCode : undefined}>{Time === 0 ? '发送验证码' : `${Time}s后重新发送`}</a>}
					rules={[
						{
							required: true,
							message: '验证码不能为空'
						},
						{
							pattern: /^\d{6}$/,
							message: '验证码格式错误'
						}
					]}
				>
					<Input placeholder="请输入" />
				</Form.Item>
			</Form>
		</div>
	)
}

export default Login
