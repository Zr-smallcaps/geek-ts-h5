import { ApiResponse, Loginfrom, Token, User } from '@/type/data'
import request from '@/utils/request'

export const loginApi = (data: Loginfrom) => {
	return request.post<ApiResponse<Token>>('/authorizations', data)
}
export const getCodeApi = (moblie: string) => {
	return request.get(`/sms/codes/${moblie}`)
}
export const getUserInfo = () => {
	return request.get<ApiResponse<User>>('/user')
}
