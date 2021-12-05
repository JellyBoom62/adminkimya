import IsLogged from '../../components/isLogged'
import App from '../app'
import { useForm, FormProvider } from 'react-hook-form'

import { Container } from '@chakra-ui/react'
import Header from '../../components/cquizheader'
import CquizQuestion from '../../components/cquizquestion'
import { fetchTest } from '../../components/serveraxios'


export async function getServerSideProps(context: any) {
	const testID = context.query.testID
	let quiz;
	try {
		quiz = JSON.stringify(await fetchTest(testID))
		quiz = JSON.parse(quiz)
	} catch {
		quiz = ''
	}
	return {
		props: { quiz },
	}
}

function Cquiz({ quiz }: any): any {
	const methods = useForm()
	const { register, setValue } = methods;

	if (quiz != '') {
		setValue('testName', quiz.testName)
		setValue('description', quiz.description)
	}

	return (
		<IsLogged>
			<App>
				<Container maxW="container.md" pb="70px">
					<FormProvider {...methods}>
						<Header testname={register('testName')} description={register('description')} setValue={setValue} quiz={quiz} />
						<CquizQuestion quiz={quiz} />
					</FormProvider>
				</Container>
			</App>
		</IsLogged>
	)

}



export default Cquiz