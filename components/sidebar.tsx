import {
	Box,
	Divider,
	Flex,
	FlexProps,
	Spacer,
	Stack,
	useColorModeValue as mode,
} from '@chakra-ui/react'
import * as React from 'react'
import {
	FaUsers,
	FaFolderOpen,
	FaFileAlt,
	FaTasks,
	FaHouseUser
} from 'react-icons/fa'
import { Logo } from './Logo'
import { NavLink } from './NavLink'
import { SearchField } from './SearchField'

export const Sidebar = (props: FlexProps) => {
	const date = new Date()
	const testID = date.getTime().toString().split('').splice(0, 10).join('')

	return (
		<Flex
			bg={mode('gray.50', 'gray.800')}
			direction="column"
			borderRightWidth="1px"
			width="64"
			minH="100vh"
			{...props}
		>
			<Flex direction="column" flex="1" pt="5" pb="4" overflowY="auto" px="4">
				<Box mb="6">
					<Logo color={mode('blue.600', 'blue.400')} h="6" />
				</Box>

				<Box mb="6">
					<SearchField />
				</Box>

				<Stack spacing="6" as="nav" aria-label="Sidebar Navigation">
					<Stack spacing="1">
						<NavLink label="Əsas səhifə" href="/" icon={FaHouseUser} />
						<NavLink label="Testlərin hazırlanması" href={`/cquiz/${testID}`} icon={FaTasks} />
						<NavLink label="Testlər" href="/quiz" icon={FaFileAlt} />
						<NavLink label="PDFlər" href="/pdf" icon={FaFolderOpen} />
						<NavLink label="İstifadəçilər" href="/users" icon={FaUsers} />
					</Stack>
					<Divider />
				</Stack>

				<Spacer />
			</Flex>
		</Flex>
	)
}
