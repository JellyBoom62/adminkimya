import {
	Box,
	Flex,
	Text,
	Stack,
	Input,
} from '@chakra-ui/react'
import { TimePicker } from 'antd';
import 'antd/dist/antd.css'
import moment from 'moment';

const Header = ({ testname, description, setValue, quiz }) => {
	let time;
	if (quiz != '') {
		time = new Date(quiz.time)
		time = moment(time, 'hh:mm:ss')
	}
	function getDate(value) {
		if (value != undefined) {
			setValue('time', value._d)
		}
	}

	return (
		<Flex w="100%" justifyContent="center" alignItems="center" mb="30px" direction='column'>
			<Box w="500px" minHeight="100px" py="15px" px="30px" mb='30px' borderRadius='md' border="2px" borderColor="blue.200" backgroundColor='gray.50'>
				<Text textAlign="center" fontSize="25px" color=" gray.600" mb="10px">Yeni Test</Text>
				<Stack spacing={3}>
					<Input variant="filled" placeholder="Testin adı" {...testname} />
					<Input variant="filled" placeholder="Əlavə" {...description} />
				</Stack>
			</Box>
			<TimePicker
				defaultValue={time}
				onChange={getDate}
				showTime
			/>
		</Flex >
	)
}

export default Header
