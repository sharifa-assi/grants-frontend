import React, { useEffect } from 'react'
import {
	Box,
	Flex,
	Switch,
	Text,
} from '@chakra-ui/react'
import { Token } from '@questbook/service-validator-client'
import Datepicker from 'src/components/ui/forms/datepicker'
import Dropdown from 'src/components/ui/forms/dropdown'
import SingleLineInput from 'src/components/ui/forms/singleLineInput'
import CustomTokenModal from 'src/components/ui/submitCustomTokenModal'
import 'react-datepicker/dist/react-datepicker.css'
import { useTranslation } from 'react-i18next'

function GrantRewardsInput({
	reward,
	setReward,
	// rewardToken,
	setRewardToken,
	rewardError,
	setRewardError,
	rewardCurrency,
	setRewardCurrency,
	setRewardCurrencyAddress,
	date,
	setDate,
	dateError,
	setDateError,
	supportedCurrencies,
	shouldEncrypt,
	setShouldEncrypt,
	shouldEncryptReviews,
	setShouldEncryptReviews,
	isEVM,
	oldDate,
	setOldDate,
}: {
  reward: string
  setReward: (rewards: string) => void
//   rewardToken: Token
  setRewardToken: (rewardToken: Token) => void
  rewardError: boolean
  setRewardError: (rewardError: boolean) => void
  rewardCurrency: string
  setRewardCurrency: (rewardCurrency: string) => void
  setRewardCurrencyAddress: (rewardCurrencyAddress: string) => void
  date: string
  setDate: (date: string) => void
  dateError: boolean
  setDateError: (dateError: boolean) => void
  supportedCurrencies: any[]
  shouldEncrypt: boolean
  setShouldEncrypt: (shouldEncrypt: boolean) => void
  shouldEncryptReviews: boolean
  setShouldEncryptReviews: (shouldEncryptReviews: boolean) => void
  isEVM: boolean
	oldDate: boolean
	setOldDate: (oldDate: boolean) => void
}) {
	const [isModalOpen, setIsModalOpen] = React.useState(false)
	const [supportedCurrenciesList, setSupportedCurrenciesList] = React.useState<any[]>([])

	useEffect(() => {
		if(supportedCurrencies && supportedCurrencies.length > 0) {
			setSupportedCurrenciesList(supportedCurrencies)
		}
	}, [supportedCurrencies])

	const [isJustAddedToken, setIsJustAddedToken] = React.useState<boolean>(false)
	const addERC = false

	const [showDropdown, setShowDropdown] = React.useState(false)

	useEffect(() => {
		const CurrenciesList = supportedCurrenciesList.filter((currencyItem) => currencyItem.length > 0);
		setShowDropdown(CurrenciesList.length > 0);
	}, [supportedCurrenciesList])
	
	const { t } = useTranslation()
	return (
		<Flex direction='column'>

			<Flex
				direction='row'
				mt={12}>
				<Box
					minW='160px'
					flex={1}>
					<SingleLineInput
						label={t('/create-grant.amount')}
						placeholder='e.g. 100'
						value={reward}
						onChange={
							(e) => {
								if(rewardError) {
									setRewardError(false)
								}

								setReward(e.target.value)
							}
						}
						isError={rewardError}
						errorText='Required'
						type='number'
					/>
				</Box>
				<CustomTokenModal
					isModalOpen={isModalOpen}
					setIsModalOpen={setIsModalOpen}
					setRewardCurrency={setRewardCurrency}
					setRewardCurrencyAddress={setRewardCurrencyAddress}
					setRewardToken={setRewardToken}
					supportedCurrenciesList={supportedCurrenciesList}
					setSupportedCurrenciesList={setSupportedCurrenciesList}
					setIsJustAddedToken={setIsJustAddedToken}
				/>
				<Box
					mt={5}
					ml={4}
					minW='148px'
					flex={0}
					alignSelf='center'>
					{
						(isEVM && supportedCurrenciesList.length > 0) ? (
							<Dropdown
								listItemsMinWidth='132px'
								listItems={supportedCurrenciesList}
								value={rewardCurrency}
								// eslint-disable-next-line react/no-unstable-nested-components
								onChange={
									(data: any) => {
										if(data === 'addERCToken') {
											setIsModalOpen(true)
										}

										setRewardCurrency(data.label)
										setRewardCurrencyAddress(data.id)
										if(data !== 'addERCToken' && !isJustAddedToken && data.icon.lastIndexOf('chain_assets') === -1) {
											// console.log('On selecting reward', data)
											setRewardToken({
												iconHash: data.icon.substring(data.icon.lastIndexOf('=') + 1),
												address: data.address,
												label: data.label,
												decimal: data.decimals.toString(),
											})
										} else {
											// console.log('On selecting reward else block', data)
											setRewardToken({
												label: data.label,
												address: data.address,
												decimal: data.decimals.toString(),
												iconHash: data.icon,
											})
										}
									}
								}
								addERC={addERC}
							/>
						) : (
							<Dropdown
								listItemsMinWidth='132px'
								listItems={
									[
										{
											icon: '',
											label: 'USD',
										},
									]
								}
							/>
						)
					}
				</Box>
			</Flex>

			<Box mt={12} />

			<Datepicker
				onChange={
					(e) => {
						if(dateError) {
							setDateError(false)
						}

						if(oldDate) {
							setOldDate(false)
						}

						setDate(e.target.value)


						// const date = new Date()
						// if(new Date(e.target.value) <= date) {
						// 	setOldDate(true)
						// 	setDateError(true)
						// } else {
						// 	setDate(e.target.value)
						// }
					}
				}
				value={date}
				isError={dateError}
				errorText={oldDate ? 'Choose a date in the future' : 'Date is Required'}
				label={t('/create-grant.deadline')}
			/>

			<Flex
				mt={8}
				gap='2'
				justifyContent='space-between'>
				<Flex direction='column'>
					<Text
						color='#122224'
						fontWeight='bold'
						fontSize='16px'
						lineHeight='20px'
					>
						Hide applicant personal data (email, and about team)
					</Text>
					<Flex>
						<Text
							color='#717A7C'
							fontSize='14px'
							lineHeight='20px'>
							{
								shouldEncrypt
									? 'The applicant data will be visible only to DAO members.'
									: 'The applicant data will be visible to everyone with the link.'
							}
						</Text>
					</Flex>
				</Flex>
				<Flex
					justifyContent='center'
					gap={2}
					alignItems='center'>
					<Switch
						id='encrypt'
						isChecked={shouldEncrypt}
						onChange={
							(e) => {
								setShouldEncrypt(e.target.checked)
							}
						}
					/>
					<Text
						fontSize='12px'
						fontWeight='bold'
						lineHeight='16px'>
						{`${shouldEncrypt ? 'YES' : 'NO'}`}
					</Text>
				</Flex>
			</Flex>

			<Flex
				mt={8}
				gap='2'
				justifyContent='space-between'>
				<Flex direction='column'>
					<Text
						color='#122224'
						fontWeight='bold'
						fontSize='16px'
						lineHeight='20px'
					>
						{t('/create-grant.private_review')}
					</Text>
					<Flex>
						<Text
							color='#717A7C'
							fontSize='14px'
							lineHeight='20px'>
							{t('/create-grant.private_review_desc')}
						</Text>
					</Flex>
				</Flex>
				<Flex
					justifyContent='center'
					gap={2}
					alignItems='center'>
					<Switch
						id='encryptReviews'
						isChecked={shouldEncryptReviews}
						onChange={
							(e) => {
								setShouldEncryptReviews(e.target.checked)
							}
						}
					/>
					<Text
						fontSize='12px'
						fontWeight='bold'
						lineHeight='16px'>
						{`${shouldEncryptReviews ? 'YES' : 'NO'}`}
					</Text>
				</Flex>
			</Flex>

		</Flex>
	)
}

export default GrantRewardsInput
