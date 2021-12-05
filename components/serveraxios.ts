import axios from "axios";
import { LoginData } from "./logindata.interface"
import { Quiz } from "./quiz.interface";

const server = axios.create({
	baseURL: "http://89.108.79.146"
})

export function login(loginData: LoginData) {
	return server.post('/admin/login', { username: loginData.username, password: loginData.password }, { withCredentials: true })
}

export function isLogin(setLoginInfo: any) {
	server.get('/admin/me', { withCredentials: true })
		.then(data => {
			setLoginInfo('logged')
		})
		.catch(err => {
			setLoginInfo('notLogged')
		})
}

export function fetchUsers(userData: any) {
	server.get('/users', { withCredentials: true })
		.then(users => {
			userData(users.data)
		})
}

export function fetchTestsName(setQuizes: any) {
	server.get('/tests/name', { withCredentials: true })
		.then(tests => {
			setQuizes(tests.data)
		})
}

export function fetchTest(id: any) {
	return server.get(`/tests/${id}`, { withCredentials: true })
		.then(response => {
			return response.data
		})
}

export function changeStatus(id: any) {
	return server.get(`/tests/status/${id}`, { withCredentials: true })
}


export function postTest(quiz: Quiz, testID: number) {
	return server.post(`/tests/${testID}`, {
		testName: quiz.testName,
		description: quiz.description,
		time: quiz.time,
		isCompleted: false,
		test: {
			description: quiz.description,
			testName: quiz.testName,
			item: [...quiz.item]
		}
	}, { withCredentials: true }
	)
}

export function deleteTest(id: number) {
	return server.post(`/tests/delete/${id}`, {}, { withCredentials: true })
}