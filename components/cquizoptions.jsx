import {
	Flex,
	Button,
	useToast
} from '@chakra-ui/react'
import { FaSave } from 'react-icons/fa'
import { postTest } from './serveraxios'
import { useRouter } from 'next/router'


const Options = ({ handleSubmit, append }) => {
	const router = useRouter()
	const { testID } = router.query
	const toast = useToast()

	const onSubmit = (quiz) => {
		postTest(quiz, testID)
			.then(data => {
				toast({
					title: "Test yarandı",
					description: "Təsdiq üçün digər səhifəyə keçin.",
					status: "success",
					duration: 2000,
					isClosable: true,
				})
			})
			.catch(err => {
				toast({
					title: "Nəsə səhvlik baş verdi",
					description: "Bir daha sınayın",
					status: "error",
					duration: 2000,
					isClosable: true,
				})
			})
	}

	function addRte() {
		append({})
	}

	return (
		<Flex w="100%" justifyContent="center" alignItems="center">
			<Button mr="10px" backgroundColor="blue.100" onClick={addRte}>++</Button>
			<Button backgroundColor="blue.100" onClick={handleSubmit(onSubmit)} ><FaSave /></Button>
		</Flex>
	)
}

export default Options