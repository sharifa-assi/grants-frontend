import { Flex, Image, Text } from '@chakra-ui/react'

interface Props {
  index: number;
  selected: number;
  id: string;
  name: string;
  onClick: () => void
}

function SidebarItem({ id, selected, index, name, onClick }: Props) {
	const isSelected = index === selected

	return (
		<Flex
			bg={isSelected ? '#F0F0F7' : Flex.defaultProps}
	  my={1}
	  py={4}
			px={4}
	  w="100%"
			borderRadius="2px"
			h={8}
			justify="start"
			align="center"
	  onClick={onClick}
	  cursor="pointer"
		>
			<Image
				src={
					`/left_sidebar/${id}_${
						index === selected ? 'selected' : 'unselected'
					}.svg`
				}
				boxSize="20px"
			/>
			<Text
				color={isSelected ? '#1F1F33' : '#7D7DA0'}
				ml={4}
				fontSize="14px"
				lineHeight={isSelected ? '16px' : '20px'}
				fontWeight="500"
			>
				{name}
			</Text>
		</Flex>
	)
}

export default SidebarItem
