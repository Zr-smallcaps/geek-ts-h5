import { getUserInfo } from '@/api/user'
import { RootThunkAction } from '@/type/store'

export const profile = (): RootThunkAction => {
	return async (dispatch) => {
		const res = await getUserInfo()
		return dispatch({
			type: 'home',
			payload: res.data.data
		})
	}
}
