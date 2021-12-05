import { Box, Flex } from '@chakra-ui/react'
import * as React from 'react'
import { MobileTopBar } from '../components/MobileTopBar'
import { Sidebar } from '../components/sidebar'

const App: React.FC = ({ children }) => {
	return (
		<Flex h="full" flexDirection="column">
			<MobileTopBar />
			<Flex flex="1" overflow="hidden">
				<Sidebar display={{ base: 'none', md: 'flex' }} />
				<Flex flex="1" p="6" pt="70px" bgColor="#fafafa">
					<Box rounded="base" h="full" w="full">
						{children}
					</Box>
				</Flex>
			</Flex>
		</Flex>
	)
}
export default App
