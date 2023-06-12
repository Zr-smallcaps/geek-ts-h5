import { Input } from 'antd-mobile'
import { useEffect, useState } from 'react'

function Test() {
	const [val, setVal] = useState('')
	const onSearch = (val: any) => {
		console.log('搜索', val || '全部')
	} // 当 val 发生变化时，请求搜索数据
	useEffect(() => {
		onSearch(val)
	}, [val])
	return (
		<div className="App">
			<Input
				placeholder="请输入内容"
				value={val}
				onChange={(val) => {
					setVal(val)
				}}
			/>
		</div>
	)
}
export default Test
