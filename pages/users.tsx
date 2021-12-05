import IsLogged from '../components/isLogged'
import App from './app'
import {
	Text,
	Box,
} from '@chakra-ui/react'

import NewTable from '../components/userstable'

export const Users = () => {
	return (
		<IsLogged>
			<App>
				<Box w="100%" mb="20px">
					<Text fontSize="20px" fontWeight="bold">İstifadəçilər</Text>
				</Box>
				<NewTable />
			</App>
		</IsLogged>
	)
}

export default Users
