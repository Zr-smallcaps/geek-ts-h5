import React, { useEffect, useRef, useState } from 'react'
import { COLORS, SIZES } from '@/constants/color'
export const Test = () => {
	const [count, setCount] = useState(0)
	const timerId = useRef(0)

	// useEffect(() => {
	// 	timerId.current = window.setInterval(() => {
	// 		console.log('interval')
	// 	}, 1000)
	// }, [])

	const clear = () => {
		clearInterval(timerId.current)
	}

	const handleClick = () => {
		setCount(count + 1)
	}

	return (
		<div>
			<button onClick={handleClick}>+1</button>
			<button onClick={clear}>清理定时器</button>
			<h1>计数器：{count}</h1>
			<button style={{ color: COLORS.text, background: COLORS.background }}>smallcaps</button>
		</div>
	)
}
