import { Token } from '@/type/data'
import { LoginAction } from '@/type/store'
import { getToken } from '@/utils/storage'

const initialState = getToken()
export const login = (state = initialState, action: LoginAction) => {
	if (action.type === 'login/login') {
		//就将登录存下来
		return action.payload
	}
	return state
}
