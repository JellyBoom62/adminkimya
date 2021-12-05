import { useEffect } from 'react';
import { useFieldArray, useFormContext } from 'react-hook-form'
import { Flex, Box, Button, Select } from '@chakra-ui/react'

import Options from './cquizoptions';
import RichTextEditor from './richtexteditor';
import CquizAnswers from './cquizanswers';

const CquizQuestion = ({ quiz }) => {
	const { register, setValue, getValues, watch, handleSubmit } = useFormContext();
	const { fields, append, remove } = useFieldArray({
		name: 'item'
	})

	useEffect(() => {
		if (quiz != '') {
			setValue('item', quiz.test.item)
		}
	}, [])

	return (
		<Box>
			{fields.map((item, index) => {
				const watchSel = watch(`item.${index}.questionType`)
				return (
					<Flex key={item.id} mb="20px" direction='row'>
						<Flex mr="10px" p="10px" fontSize='20px' backgroundColor='blue.100' borderRadius='md' w='40px' h='40px' alignItems="center" justifyContent="center">{index + 1}</Flex>
						<Flex direction="column">
							<RichTextEditor index={index} setValue={setValue} getValues={getValues} quiz={quiz} />
							<Select defaultValue="radio" mt="10px" mb="10px" {...register(`item.${index}.questionType`)}>
								<option value="radio">Bir cavab</option>
								<option value="checkbox">Bir neçə cavab</option>
							</Select>
							<CquizAnswers index={index} type={watchSel} quiz={quiz} getValues={getValues} />
						</Flex>
						<Button ml="10px" onClick={() => remove(index)}>X</Button>
					</Flex>
				)
			})}
			<Options handleSubmit={handleSubmit} append={append} />
		</Box>
	)
}

export default CquizQuestion