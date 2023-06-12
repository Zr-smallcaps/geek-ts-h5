import store from '@/store/index'
import { ThunkAction } from 'redux-thunk'
import { Loginfrom, Token, User } from './data'
// 登录的action
type LoginAction =
	| {
			type: 'login/login'
			payload: Token
	  }
	| {
			type: 'logout/logout'
	  }
	| {
			type: 'login/updatetoken'
			payload: Token
	  }
// 个人中心的action类型
type ProfileAction = {
	type: 'home'
	payload: User
}
type RootState = ReturnType<typeof store.getState>
type RootAction = LoginAction | ProfileAction
type RootThunkAction = ThunkAction<void, RootState, unknown, RootAction>

export { RootState, RootThunkAction, LoginAction, ProfileAction, RootAction }
