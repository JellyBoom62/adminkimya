import { useState, useEffect } from 'react'

import {
	Spinner,
	Flex,
	Box,
	Text,
	Link,
	Button,
	Badge,
	useToast,
} from '@chakra-ui/react'
import DataTable from './datatable';
import { AiOutlineDelete } from "react-icons/ai";
import { changeStatus, fetchTestsName, deleteTest } from './serveraxios';
import router from 'next/router';

const columns = [
	{
		title: 'Testin adı',
		dataIndex: 'name',
		key: 'name',
		width: '20%',
	},
	{
		title: 'Əlavə',
		dataIndex: 'description',
		key: 'description',
		width: '20%',
	},
	{
		title: 'Status',
		dataIndex: 'status',
		key: 'status',
		width: '10%'
	},
	{
		title: 'Dəyişmək',
		dataIndex: 'edit',
		key: 'edit',
		width: '10%',
	},
	{
		title: 'Statistika',
		dataIndex: 'info',
		key: 'info',
		width: '10%'
	},
	{
		title: 'Silmək',
		dataIndex: 'delete',
		key: 'delete',
		width: '15%'
	},
];

const QuizTables = () => {
	let arr = new Array()
	const toast = useToast()
	const [quizes, setQuizes] = useState();
	const [data, setData] = useState()
	const [reload, setReload] = useState(false)

	useEffect(() => {
		fetchTestsName(setQuizes)
	}, [reload])

	useEffect(() => {
		if (quizes == undefined) {
		} else {
			quizes.map(item => {
				let statustext = 'Aktiv deyil'
				let colorSch = 'red'
				if (item.isCompleted == true) {
					statustext = 'Aktivdi'
					colorSch = 'green'
				}
				arr.push({
					key: item.testID,
					name: item.testName,
					description: item.description,
					status: (<Badge colorScheme={colorSch} cursor="pointer" onClick={() => {
						changeStatus(item.testID)
						if (colorSch == 'red') {
							toast({
								title: "Test aktivləşdi",
								description: "",
								status: "success",
								duration: 1000,
								isClosable: true
							})
						} else {
							toast({
								title: "Test çıxarıldı",
								description: "",
								status: "error",
								duration: 1000,
								isClosable: true
							})
							setReload(prev => !prev)
						}
					}}>{statustext}</Badge>),
					edit: (<Link href={`cquiz/${item.testID}`} target="_blank " color='cyan.500'>Dəyiş</Link>),
					info: (<Button size='sm'
						onClick={() => router.push(`quiz/${item.testID}`)}
					>Məlumat</Button>),
					delete: (
						<Flex direction="row" alignItems="center" color="red.500" fontWeight="semibold"
							cursor="pointer"
							onClick={() => {
								deleteTest(item.testID)
								setReload(prev => !prev)
							}}
						>
							<AiOutlineDelete fontSize="16px" /><Text ml="5px">Silmək</Text>
						</Flex>
					)
				})
			});
			setData(arr.reverse())
		}
	}, [quizes])

	if (quizes == undefined) {
		return (
			<Flex w="100%" alignItems="center" justifyContent="center">
				<Spinner />
			</Flex>
		)
	} else {
		return (
			<Flex direction="column">
				<Button w="100px" mb="10px" border="2px" borderColor="gray.300" onClick={() => setReload(prev => !prev)}>Təzələ</Button>
				<Box border='1px' borderColor="gray.100">
					<DataTable data={data} columns={columns} />
				</Box>
			</Flex>
		)
	}
}

export default QuizTables
