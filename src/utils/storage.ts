import { Token } from '@/type/data'

const tokenKey = 'geek-h5-token'
export const getToken = () => {
	return JSON.parse(localStorage.getItem(tokenKey) || '{}')
}
export const setToken = (value: Token) => {
	return localStorage.setItem(tokenKey, JSON.stringify(value))
}
export const removeToken = () => {
	return localStorage.removeItem(tokenKey)
}
export const isHasToken = () => {
	return !!Object.keys(getToken()).length
}
