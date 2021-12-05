import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

import { isLogin } from './serveraxios'
import { Box, Spinner } from '@chakra-ui/react'

const IsLogined: any = (props: any) => {
	const [loginInfo, setLoginInfo] = useState('NoInfo')

	const router = useRouter()

	useEffect(() => {
		isLogin(setLoginInfo)
	}, [])

	if (loginInfo == 'NoInfo') {
		return (
			<Box w="100%" h="100vh" display="flex" justifyContent="center" alignItems="center">
				<Spinner size="xl" />
			</Box>
		)
	} else if (loginInfo == 'logged') {
		router.push("/")
		return (
			<div>
			</div>
		)
	} else if (loginInfo == 'notLogged') {
		return (
			<div>
				{props.children}
			</div>
		)
	}
}

export default IsLogined