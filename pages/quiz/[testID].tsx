import IsLogged from '../../components/isLogged'
import App from '../app'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'

import {
	Flex,
	Box,
	Text,
} from '@chakra-ui/react'
import { IoIosArrowRoundBack } from "react-icons/io";

const Quiz = () => {
	const router = useRouter()
	const { testID } = router.query

	return (
		<IsLogged>
			<App>
				<Flex w="100%" mb="20px" direction="row" alignItems="center" color="cyan.500">
					<IoIosArrowRoundBack fontSize="30px" cursor="pointer" onClick={() => router.back()} /><Text fontSize="20px" fontWeight="bold" color="gray.900" ml="5px" mb="3px">Test: {testID}</Text>
				</Flex>
			</App>
		</IsLogged>
	)
}

export default Quiz
