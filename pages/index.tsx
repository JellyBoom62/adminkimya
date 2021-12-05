import type { NextPage } from 'next'

import IsLogged from '../components/isLogged'
import App from './app'

const Home: NextPage = () => {
	return (
		<IsLogged>
			<App>
			</App>
		</IsLogged>
	)
}

export default Home
