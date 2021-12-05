import { useState } from 'react'
import { NextPage } from "next"
import {
	Box,
	Input,
	Button,
	Heading,
	FormLabel,
	Flex,
	useToast
} from "@chakra-ui/react"
import { useForm } from "react-hook-form";
import { login } from '../components/serveraxios';
import { LoginData } from '../components/logindata.interface';
import IsLogined from '../components/isLogined';
import { useRouter } from 'next/router';

const Login: NextPage = () => {
	const { register, handleSubmit } = useForm();

	const router = useRouter()

	const toast = useToast()

	const onSubmit: any = (loginData: LoginData) => {
		login(loginData)
			.then(data => {
				if (data.data == true) {
					toast({
						title: "Uğurla giriş edildi",
						status: "success",
						duration: 2000,
						isClosable: true,
					})
				}
			})
			.then(() => {
				router.push('/')
			})
			.catch(err => {
				toast({
					title: "Səhvlik oldu",
					status: "error",
					duration: 2000,
					isClosable: true,
				})
			})

	}

	return (
		<IsLogined>
			<Box w="100%" h="100vh" display="flex" alignItems="center" justifyContent="center">
				<form onSubmit={handleSubmit(onSubmit)}>
					<Flex py="50px" rounded="6" maxW="xl" direction="column">
						<Heading mb="20px">Giriş</Heading>
						<FormLabel>Ad</FormLabel>
						<Input {...register("username")} w="300px" mb="20px" placeholder="Almaz" variant="filled" />
						<FormLabel>Şifrə</FormLabel>
						<Input {...register("password")} w="300px" mb="40px" placeholder="*****" variant="filled" type="password" />
						<Button type="submit">Daxil ol</Button>
					</Flex>
				</form>
			</Box>
		</IsLogined>
	)
}

export default Login
