import { getCodeApi, loginApi } from '@/api/user'
import { Loginfrom } from '@/type/data'
import { RootThunkAction } from '@/type/store'
import { setToken } from '@/utils/storage'
import to from 'await-to-js'
export const login = (results: Loginfrom): RootThunkAction => {
	return async (dispatch) => {
		const {
			data: { data }
		} = await loginApi(results)
		// 使用await-to-js这个库时  [err,data] 如果第一个值有值时表示通讯错误的时候返回的值   data表示通讯成功的时候返回的值   但是在通讯成功时第一个值是null
		// const [err, data] = await to(loginApi(results))
		// console.log('=========', err, data)
		// if (err) return
		dispatch({
			type: 'login/login',
			payload: {
				token: data.token,
				refresh_token: data.refresh_token
			}
		})
		setToken(data)
	}
}
/**
 *
 * @returns 获取的验证码
 */
export const getCode = (mobile: string) => {
	return async () => {
		const res = await getCodeApi(mobile)
		console.log(res)
	}
}
