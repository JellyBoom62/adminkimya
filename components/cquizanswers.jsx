import { useFormContext, useFieldArray } from 'react-hook-form'
import { Radio, RadioGroup, Input, Flex, Button, Checkbox } from '@chakra-ui/react';

const CquizAnswers = ({ index, type, quiz, getValues }) => {
	const { register } = useFormContext()
	const { fields, append, remove } = useFieldArray({
		name: `item.${index}.variants`,
	});
	if (type == undefined) {
		type = 'radio'
	}
	let answer = undefined
	if (quiz != '') {
		answer = getValues(`item.${index}.answer`)
	}
	return (
		<RadioGroup defaultValue={answer}>
			{fields.map((dat, ind) => {
				if (type == 'radio') {
					return (
						<Flex key={dat.id} direction="row" mb="10px">
							<Radio size="lg" value={`${ind}`} {...register(`item.${index}.answer`)} mr="5px" />
							<Input {...register(`item.${index}.variants.${ind}.value`)} mr="5px" />
							<Button onClick={() => remove(ind)}>X</Button>
						</Flex>
					)
				} else if (type == 'checkbox') {
					return (
						<Flex key={dat.id} direction="row" mb="10px">
							<Checkbox defaultValue={'true'} {...register(`item.${index}.answers.${ind}.value`)} mr="5px" />
							<Input {...register(`item.${index}.variants.${ind}.value`)} mr="5px" />
							<Button onClick={() => remove(ind)}>X</Button>
						</Flex>
					)
				}
			})}
			<Button onClick={() => append({})}>Add</Button>
		</RadioGroup>
	)
}

export default CquizAnswers
