import { Token, User } from '@/type/data'
import { ProfileAction, LoginAction } from '@/type/store'
import { getToken } from '@/utils/storage'
type ProfileState = {
	user: User
}
const initialState = {
	user: {}
} as ProfileState

export const profile = (state = initialState, action: ProfileAction) => {
	if (action.type === 'home') {
		//就将登录存下来
		return {
			...state,
			user: action.payload
		}
	}
	return { ...initialState }
}
