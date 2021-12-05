import { useEffect, useState } from 'react'

import { isLogin } from "./serveraxios"
import { Spinner, Flex } from "@chakra-ui/react"
import { useRouter } from 'next/router';

const IsLogged: any = (props: any) => {
	const [loginInfo, setLoginInfo] = useState('NoInfo')

	const router = useRouter()

	useEffect(() => {
		isLogin(setLoginInfo)
	}, [])

	if (loginInfo == "NoInfo") {
		return (
			<Flex h="100vh" justifyContent="center" alignItems="center">
				<Spinner size="xl" />
			</Flex>
		)
	} else if (loginInfo == 'logged') {
		return (
			<>
				{props.children}
			</>
		)
	} else if (loginInfo == 'notLogged') {
		router.push('/login')
		return (
			<>
			</>
		)
	}
}

export default IsLogged
