import IsLogged from '../components/isLogged'
import App from './app'

import { Box, Text } from '@chakra-ui/react'
import QuizTables from '../components/quiztables'


export const Quizes = () => {
	return (
		<IsLogged>
			<App>
				<Box w="100%" mb="20px">
					<Text fontSize="20px" fontWeight="bold">Testlər</Text>
				</Box>
				<QuizTables />
			</App>
		</IsLogged>
	)
}

export default Quizes
