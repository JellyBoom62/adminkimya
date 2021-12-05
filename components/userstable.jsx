import { useEffect, useState } from 'react'

import { fetchUsers } from './serveraxios';
import { Box, Text, Flex, Spinner, Badge, Button } from '@chakra-ui/react';
import '../styles/userstable.module.scss'

const NewTable = () => {
	const [userData, setUserData] = useState(undefined)
	const [pageNum, setPageNum] = useState(1)
	const [reload, setReload] = useState(false)

	useEffect(() => {
		fetchUsers(setUserData)
	}, [reload]);

	if (userData == undefined) {
		return (
			<Flex w="100%" alignItems="center" justifyContent="center">
				<Spinner />
			</Flex>
		)
	} else {
		const pagel = 9
		const pagenums = Math.ceil(userData.length / pagel)
		let table = []
		for (let i = 1; i <= pagenums; i++) {
			table.push(i)
		}
		return (
			<div>
				<Flex direction="row" w='100%'>
					<Flex direction='column' w='100%' bgColor="#fff">
						<Box bgColor='#f4f4f4' h='40px' pl="15px" display='flex' alignItems='center' color="gray.600" fontSize='15px' fontWeight="semibold">AD, SOYAD</Box>
						{userData.map((item, index) => {
							if (index < pagel * pageNum && index >= pagel * (pageNum - 1)) {
								return (
									<Text p="15px" borderBottom="1px" borderColor="gray.100" color="gray.700" key={index}>{item.name} {item.surname}</Text>
								)
							}
						})}
					</Flex>
					<Flex direction='column' w='100%' bgColor="#fff">
						<Box bgColor='#f4f4f4' h='40px' pl="15px" display='flex' alignItems='center' color="gray.600" justifyContent='center' fontSize='15px' fontWeight="semibold">İSTİFADƏÇİ ADI</Box>
						{userData.map((item, index) => {
							if (index < pagel * pageNum && index >= pagel * (pageNum - 1)) {
								return (
									<Text p="15px" borderBottom="1px" borderColor="gray.100" color="gray.700" textAlign='center' key={index}>{item.username}</Text>
								)
							}
						})}
					</Flex>
					<Flex direction='column' w='100%' bgColor="#fff">
						<Box bgColor='#f4f4f4' h='40px' pl="15px" display='flex' alignItems='center' color="gray.600" justifyContent='center' fontSize='15px' fontWeight="semibold">MƏKTƏB</Box>
						{userData.map((item, index) => {
							if (index < pagel * pageNum && index >= pagel * (pageNum - 1)) {
								return (
									<Box p="15px" borderBottom="1px" borderColor="gray.100" textAlign='center' key={index}>
										<Badge colorScheme="green">{item.school}</Badge>
									</Box>
								)
							}
						})}
					</Flex>
					<Flex direction='column' w='100%' bgColor="#fff">
						<Box bgColor='#f4f4f4' h='40px' pl="15px" display='flex' alignItems='center' color="gray.600" justifyContent='center' fontSize='15px' fontWeight="semibold">SİNİF</Box>
						{userData.map((item, index) => {
							if (index < pagel * pageNum && index >= pagel * (pageNum - 1)) {
								return (
									<Box p="15px" borderBottom="1px" borderColor="gray.100" textAlign='center' key={index}>
										<Badge colorScheme="purple">{item.class}{item.group}</Badge>
									</Box>
								)
							}
						})}
					</Flex>
				</Flex>
				<Flex direction='row' w='100%' h="90px" p='6' bgColor="#fff" justifyContent="space-between">
					<Box>
						<Button bgColor="#fff" color='gray.600' mr="5px" fontSize='13px'>Prev</Button>
						{table.map(item => {
							if (pageNum == item) {
								return (
									<Button size="sm" bgColor="#fff" color='gray.600' mr="7px" border="1px" borderRadius='3px' borderColor="gray.600"
										_focus={{
										}}
										key={item}
									>{item}</Button>
								)
							} else {
								return (
									<Button size="sm" bgColor="#fff" color='gray.400' mr="7px" borderRadius='3px'
										_focus={{
										}}
										onClick={() => {
											setPageNum(item)
										}}
										key={item}
									>{item}</Button>
								)
							}
						})}
						<Button bgColor="#fff" color='gray.600' mr="5px" fontSize='13px'>Next</Button>
					</Box>
					<Button border="2px" borderColor="gray.300" onClick={() => setReload(prev => !prev)}>Təzələ</Button>
				</Flex>
			</div>
		)
	}
}

export default NewTable
