import { useMediaQuery } from 'react-responsive'
import { Button, Flex, Image, Text } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { ArrowRight } from 'src/generated/icons'

function HeroBanner() {
	const buildComponent = () => (
		<Flex
			direction='row'
			w='100%'
			alignItems='stretch'
			alignContent='stretch'
			h='460px'>
	
			{
				!isMobile && (
					<Flex
						bgColor='brand.green'
						flexGrow={1}
						justifyContent='center'>
						<Image
							mt={10}
							src='/full-logo.svg' width='500px' />
					</Flex>
				)
			}
		</Flex>
	)
	const isMobile = useMediaQuery({ query:'(max-width:600px)' })
	const router = useRouter()

	return buildComponent()
}

export default HeroBanner