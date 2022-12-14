import { useState } from 'react'
import { Button, Flex, FlexProps, IconButton, Image, Input, InputProps, Text } from '@chakra-ui/react'

interface Props {
    label: string
	allowMultiple: boolean
	config: InputProps[][] // 2D array of InputProps
    flexProps?: FlexProps
}

function SelectArray({ label, allowMultiple, flexProps, config }: Props) {
	const buildComponent = () => {
		return (
			<Flex
				direction='column'
				mt={8}
				w='100%'
				{...flexProps}>
				<Flex
					w='100%'
					align='start'>
					<Text
						mr={8}
						pb={2}
						variant='v2_subheading'
						w='calc(30% - 32px)'
						fontWeight='500'
						textAlign='right'>
						{label}
					</Text>
					<Flex
						w='70%'
						direction='column'>
						{
							config.map((_, index) => {
								return (
									<Flex
										mt={index === 0 ? 0 : 6}
										w='100%'
										key={index}>
										<Text
											mt={1}
											color='gray.4'
											variant='v2_heading_3'
											fontWeight='500'>
											{index < 9 ? `0${index + 1}` : (index + 1)}
										</Text>

										<Flex
											ml={5}
											direction='column'
											w='100%'>
											{
												config[index].map((inputProps, i) => {
													const [value, setValue] = useState<string>(inputProps?.value?.toString() ?? '')

													return (
														<Flex
															key={i}
															mt={i === 0 ? 0 : 4}
															direction='column'>
															<Input
																{...inputProps}
																value={value}
																variant='flushed'
																textAlign='left'
																borderColor='gray.3'
																borderBottom='1px solid'
																fontSize='20px'
																lineHeight='28px'
																color='black.1'
																onWheel={(e) => (e.target as HTMLElement).blur()}
																_placeholder={
																	{
																		color: 'gray.5'
																	}
																}
																onChange={
																	(e) => {
																		setValue(e.target.value)
																		inputProps?.onChange?.(e)
																	}
																}
															/>
															{
																inputProps.maxLength && (
																	<Text
																		mt={1}
																		ml='auto'
																		variant='v2_metadata'
																		color='gray.5'>
																		{value.length.toString()}
																		{' '}
																		/
																		{' '}
																		{inputProps.maxLength}
																	</Text>
																)
															}
														</Flex>

													)
												})
											}
										</Flex>

										<IconButton
											ml={2}
											mt={4}
											aria-label={`remove-${index}`}
											isDisabled={length === 1}
											variant='ghost'
											icon={
												<Image
													src='/v2/icons/close.svg'
													boxSize='20px' />
											} />
									</Flex>
								)
							})
						}

						{
							allowMultiple && (
								<Flex mt={6}>
									<Button
										variant='link'
										leftIcon={
											<Image
												src='/v2/icons/add/black.svg'
												boxSize='28px' />
										}>
										<Text
											variant='v2_subheading'
											fontWeight='500'>
											Add another
										</Text>
									</Button>
								</Flex>
							)
						}

					</Flex>
				</Flex>

			</Flex>
		)
	}

	return buildComponent()
}

export default SelectArray