import React, {
	ReactElement,
} from 'react'
import { Box, Button, Container, Flex, Heading, Image, Menu, MenuButton, MenuItem, MenuList, ResponsiveValue, Spacer, Text, Tooltip } from '@chakra-ui/react'
import NavbarLayout from '../../src/layout/navbarLayout';
import Chart from "react-apexcharts";


const TableHeader = [
	'Name',
	'Pending applications',
	'$ Disbursed',
	'Response TAT',
	'Action'
]


const tableHeadersAlign = [
	'start',
	'center',
	'center',
	'center',
	'center',
]
const data = [
	{
		'name':'LP management tools for perp v2 LP management tools for perp v2',
		'Pendingapp':'15',
		'disburded':'$12500',
		'responseTa':'6d12hr',
		'status':'reviwed'
	},

	{
		'name':'LP management tools for perp v2',
		'Pendingapp':'15',
		'disburded':'$12500',
		'responseTa':'6d12hr',
		'status':'reviwed'
	},
	{
		'name':'LP management tools for perp v2',
		'Pendingapp':'15',
		'disburded':'$12500',
		'responseTa':'6d12hr',
		'status':'reviwed'
	},
	{
		'name':'LP management tools for perp v2',
		'Pendingapp':'15',
		'disburded':'$12500',
		'responseTa':'6d12hr',
		'status':'reviwed'
	},
	{
		'name':'Unity implementation of metametalang',
		'Pendingapp':'200',
		'disburded':'$1000500',
		'responseTa':'6d12hr',
		'status':'reviwed'
	},
	{
		'name':'LP management tools for perp v2',
		'Pendingapp':'15',
		'disburded':'$12500',
		'responseTa':'6d12hr',
		'status':'reviwed'
	},
	{
		'name':'Unity implementation of metametalang',
		'Pendingapp':'15',
		'disburded':'$12500',
		'responseTa':'6d12hr',
		'status':'reviwed'
	},
]
const tableHeadersflex = [0.20, 0.40, 0.10, 0.20, 0.17]

const tableBodyFlex = [0.25, 0.40, 0.10, 0.20, 0.17]

function DaoDashboard() {

	return (

		<>
			<Container
				maxW="100%"
				display="flex"
				px="70px"
				mb="300px"
				background="#E5E5E5"
				height="100%"
			>
				<Container
					flex={1}
					display="flex"
					flexDirection="column"
					maxW="1116px"
					alignItems="stretch"
					pb={8}
					px={10}
					pos="relative"
				 >
					<Flex
						direction="row"
						mt={5}
						align="center">
						<Text
							variant="heading"
							mr="14">
						DAO Stats
						</Text>
						<Spacer />

						<Menu
							placement="bottom"
							align="right"
						>
							<Box
								width="169px"
								height="32px"
								borderRadius="8px"
								border="1px solid #AAAAAA"
								align="center"
							>
								<MenuButton
									as={Button}
									mt="1"
									aria-label="View More Options"
									// mt="-28px"
									// pl="16px"
									variant="link"
									textDecoration="none"
									_focus={{}}
									leftIcon={<Image src="/ui_icons/calender-dao.svg" />}
									color="#373737"
									rightIcon={<Image src="/ui_icons/dropdown_arrow.svg" />}
									fontSize="16px"
									fontWeight="500"
									w="fit-content"
									mx="auto"
								>
          Last Month
								</MenuButton>
							</Box>
							<MenuList
								minW="164px"
								p={0}>
								<MenuItem>
									<Text
										fontSize="14px"
										fontWeight="400"
										lineHeight="20px"
										color="#122224"
									 >
										Last 3 Month
									</Text>
								</MenuItem>

								<MenuItem>
									<Text
										fontSize="14px"
										fontWeight="400"
										lineHeight="20px"
										color="#122224"
									 >
										Last 3 Month
									</Text>
								</MenuItem>
								<MenuItem>
									<Text
										fontSize="14px"
										fontWeight="400"
										lineHeight="20px"
										color="#122224"
									 >
										Last 3 Month
									</Text>
								</MenuItem>

							</MenuList>
						</Menu>
					</Flex>


					<Flex
						mt="5"
						width="1040px"
						height="84px"
						background="#FFFFFF"
						boxShadow="0px 0px 8px rgba(18, 34, 36, 0.08)"
						borderRadius="8px"
						display="flex"

					 >


						<Flex
							margin="5"
							display="flex"
							gap="60px"
						>


							<Flex
								display="flex"
								flexDirection="column"
								alignItems="flex-start"
							>

								<Flex>
									<Text
										fontWeight={700}
										fontSize="20px"
										lineHeight="24px"
									>
                             6,347
									</Text>
									<Text
										fontWeight="400"
										fontSize="14px"
										lineHeight="24px"
										color="#00AD84"
										ml="10px"
									>
									+40%
									</Text>
								</Flex>

								<Text
				 fontSize="16px"
				 color="#AAAAAA"
				 fontWeight="400"
				 lineHeight="24px"
				 >
Total Applicants
								</Text>

							</Flex>


							<Flex
								display="flex"
								flexDirection="column"
								alignItems="flex-start"
							>

								<Flex>
									<Text
										fontWeight={700}
										fontSize="20px"
										lineHeight="24px"
									>
                             2,636
									</Text>
									<Text
										fontWeight="400"
										fontSize="14px"
										lineHeight="24px"
										color="#EE7979"
										ml="10px"

									>
									-4%
									</Text>
								</Flex>

								<Text
				 fontSize="16px"
				 color="#AAAAAA"
				 fontWeight="400"
				 lineHeight="24px"
				 >
Unique Applicants
								</Text>

							</Flex>

							<Flex
								display="flex"
								flexDirection="column"
								alignItems="flex-start"
							>

								<Flex>
									<Text
										fontWeight={700}
										fontSize="20px"
										lineHeight="24px"
									>
                             3,800
									</Text>
									<Text
										fontWeight="400"
										fontSize="14px"
										lineHeight="24px"
										color="#00AD84"
										ml="10px"

									>
									+7%
									</Text>
								</Flex>

								<Text
				 fontSize="16px"
				 color="#AAAAAA"
				 fontWeight="400"
				 lineHeight="24px"
				 >
Repeats Applicants
								</Text>

							</Flex>

						</Flex>


					</Flex>

					<Flex mt="4">


						<Flex
							display="flex"
							flexDirection="row"
							alignItems="flex-start"
							gap="20px"
						>
							<Flex
								width="512px"
								height="248px"
								borderRadius="8px"
								background="#FFFFFF"

							 >
								<Text>
									Application Recieved
								</Text>


							</Flex>

							<Flex
								width="512px"
								height="248px"
								borderRadius="8px"
								background="#FFFFFF"
							 >
								<Text>
									Application Recieved
								</Text>


							</Flex>


						</Flex>


					</Flex>

					<Heading
						fontSize="24px"
						fontWeight="700"
						mt="10"
						 >
						Grants (
						{data.length}
)
					</Heading>

					<Flex
						mt="2"
					>

						<Flex
						 direction="column"
					     width="100%"
						 align="center"
						 borderRadius="8px 8px 0px 0px"
						 borderBottom="1px solid #E8E9E9"
						 background="#FFFFFF"
						 height="56px"
						 boxShadow="0px 0px 8px rgba(18, 34, 36, 0.08)"
						>
							<Flex
								w="100%"
								py={0}
								mt="4"
								align="center"
								justify="strech"


							>

								{
                         		TableHeader.map((header, index) => (

										<Text
											whiteSpace="nowrap"
											key={header}
											fontWeight="700"
											fontSize="16px"
											lineHeight="24px"
											textAlign={tableHeadersAlign[index] as ResponsiveValue<'left' | 'center'>}
											flex={tableHeadersflex[index]}
											ml="20px"


										>
											{header}
										</Text>

									))

								}
							</Flex>

							<Flex
								mt="15px"
								direction="column"
								w="100%"
								border="1px solid #E8E9E9"
								align="stretch"
								mb="10"

							>

								{
									data.map((item, index) => (

										<Flex
											key={index}
											gap={3}
											w="100%"
											bg={(index + 1) % 2 === 0 ? '#F7F9F9' : '#FFFFFF'}
											px={0}
											py={5}>
											{/* <Flex> */}
											<Flex
												flex={tableBodyFlex[0]}
												align="start"
												fontWeight="400"
												fontSize="16px"
												lineHeight="24px"
												ml="20px"
											>
												<Tooltip label={item?.name}>
													<Text>
														{`${item.name.substring(0, 31)}...${item.name.substring(0, 30) > 32 ? "more":""}`}
													</Text>
												</Tooltip>
												{/* </Flex> */}
											</Flex>

											<Text
												flex={tableBodyFlex[1]}
												align="center"
												letterSpacing="0.5px"
											>
												{item.Pendingapp}
											</Text>

											<Text
												flex={tableBodyFlex[2]}
												align="center"
												letterSpacing="0.5px"
												width="inherit"
											>
												{item.disburded}
											</Text>

											<Text
												flex={tableBodyFlex[3]}
												align="center"
												letterSpacing="0.5px"
												width="inherit"
											>
												{item.responseTa}
											</Text>

											<Flex
												display="flex"
												flexDirection="column"
												alignItems="center"
												flex={tableBodyFlex[4]}
											>
												<Button
													fontWeight="500"
													background="#8850EA"
													fontSize="14px"
													lineHeight="14px"
													textAlign="center"
													borderRadius={8}
													borderColor="brand.500"
													_focus={{}}
													p={0}
													minW={0}
													w="88px"
													h="32px"
													color="white"

												>
                Review
												</Button>

											</Flex>

										</Flex>
									))

								}

							</Flex>
						</Flex>

					</Flex>


				</Container>
			</Container>

		</>


	)

}

DaoDashboard.getLayout = function(page: ReactElement) {
	return (
		<NavbarLayout>
			{page}
		</NavbarLayout>
	)
}

export default DaoDashboard