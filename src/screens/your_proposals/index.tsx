import React, {
	ReactElement, useCallback, useContext, useEffect, useRef, useState,
} from 'react'
import { useTranslation } from 'react-i18next'
import { InfoIcon } from '@chakra-ui/icons'
import {
	Button,
	Flex, HStack, Text, VStack,
} from '@chakra-ui/react'
import BN from 'bn.js'
import { useRouter } from 'next/router'
import Empty from 'src/components/ui/empty'
import Heading from 'src/components/ui/heading'
import YourApplicationCard from 'src/components/your_applications/yourApplicationCard'
import { CHAIN_INFO } from 'src/constants/chains'
import config from 'src/constants/config.json'
import { GrantApplication, useGetMyApplicationsLazyQuery } from 'src/generated/graphql'
import { useQuestbookAccount } from 'src/hooks/gasless/useQuestbookAccount'
import { getUrlForIPFSHash } from 'src/libraries/ipfsUtils'
import NavbarLayout from 'src/libraries/ui/navbarLayout'
import { ApiClientsContext } from 'src/pages/_app'
import getAvatar from 'src/utils/avatarUtils'
import { formatAmount, getChainIdFromResponse, getFormattedDateFromUnixTimestamp } from 'src/utils/formattingUtils'
import { getSupportedChainIdFromSupportedNetwork } from 'src/utils/validationUtils'


const PAGE_SIZE = 20

function YourProposals() {

	const buildComponent = () => (
		<VStack
			ref={containerRef}
			w='100%'
			align='center'
		>
			{requiresMigrate && <MigrateToGaslessHeader />}
			<Flex
				flex={1}
				direction='column'
				maxW='70%'
				minW='50%'
				alignItems='stretch'
				pb={8}
				px={10}
				mx='auto'
			>
				<Heading title={t('/your_applications.your_proposals')} />

				{
					proposals.length > 0
					&& proposals.map((proposal: any) => (
						(
							<YourApplicationCard
								key={proposal.id}
								grantTitle={proposal.grant.title}
								daoName={proposal.grant.workspace.title}
								daoIcon={
									proposal.grant.workspace.logoIpfsHash === config.defaultDAOImageHash ?
										getAvatar(true, proposal.grant.workspace.title) :
										getUrlForIPFSHash(proposal.grant.workspace.logoIpfsHash)
								}
								isGrantVerified={(new BN(proposal.grant.funding)).gt(new BN(0))}
								funding={
									formatAmount(
										proposal.grant.funding,
										CHAIN_INFO[
											getSupportedChainIdFromSupportedNetwork(
												proposal.grant.workspace.supportedNetworks[0],
											)
										]?.supportedCurrencies[proposal.grant.reward.asset.toLowerCase()]
											?.decimals,
									)
								}
								currency={
									CHAIN_INFO[
										getSupportedChainIdFromSupportedNetwork(
											proposal.grant.workspace.supportedNetworks[0],
										)
									]?.supportedCurrencies[proposal.grant.reward.asset.toLowerCase()]
										?.label || 'LOL'
								}
								isDaoVerified={false}
								status={proposal.state}
								sentDate={getFormattedDateFromUnixTimestamp(proposal?.createdAtS)}
								updatedDate={getFormattedDateFromUnixTimestamp(proposal?.updatedAtS)}
								onViewGrantClick={
									() => router.push({
										pathname: '/explore_grants/about_grant',
										query: {
											grantId: proposal.grant.id,
											chainId: getChainIdFromResponse(
												proposal.grant.workspace.supportedNetworks[0],
											),
										},
									})
								}
								onViewApplicationClick={
									() => router.push({
										pathname: '/your_applications/grant_application',
										query: {
											applicationId: proposal.id,
											chainId: getChainIdFromResponse(
												proposal.grant.workspace.supportedNetworks[0],
											),
										},
									})
								}
								onManageGrantClick={
									() => router.push({
										pathname: '/your_applications/manage_grant',
										query: {
											applicationId: proposal.id,
											chainId: getChainIdFromResponse(
												proposal.grant.workspace.supportedNetworks[0],
											),
										},
									})
								}
							/>
						)
					))
				}

				{
					proposals.length === 0 && (
						<Flex
							direction='column'
							mt={14}
							align='center'>
							<Empty
								src='/illustrations/empty_states/no_applications.svg'
								imgHeight='134px'
								imgWidth='147px'
								title='No applications'
								subtitle='All your grant applications are shown here. Discover grants on our home page.'
							/>
						</Flex>
					)
				}

			</Flex>
		</VStack>
	)

	const router = useRouter()
	// const [applicantID, setApplicantId] = useState<any>('');
	// const subgraphClient = useContext(ApiClientsContext)?.subgraphClient;
	const { subgraphClients } = useContext(ApiClientsContext)!
	const [proposals, setMyApplications] = useState<any>([])
	const [requiresMigrate, setRequiresMigrate] = useState(false)
	const { t } = useTranslation()

	const containerRef = useRef(null)
	const { data: accountData } = useQuestbookAccount()
	const [currentPage, setCurrentPage] = useState(0)
	// modified for testing
	const allNetworkApplications = Object.keys(subgraphClients)!.map((key) => (

		useGetMyApplicationsLazyQuery({ client: subgraphClients[key].client })
	))


	const getMyApplicationsData = async() => {
		try {
			const promises = allNetworkApplications.map((allApplications) => (
				// eslint-disable-next-line no-async-promise-executor
				new Promise(async(resolve) => {
					try {
						const { data } = await allApplications[0]({
							variables: {
								first: PAGE_SIZE,
								skip: currentPage * PAGE_SIZE,
								applicantID: accountData?.address || '',
							},
						})
						if(data && data.grantApplications) {
							resolve(data.grantApplications)
						} else {
							resolve([])
						}
					} catch(err) {
						resolve([])
					}
				})
			))
			Promise.all(promises).then((values: any[]) => {
				const allApplicationsData = [].concat(...values)
				allApplicationsData
					.sort((a: GrantApplication, b: GrantApplication) => b.createdAtS - a.createdAtS)
				setMyApplications([...proposals, ...allApplicationsData])
				setCurrentPage(currentPage + 1)
			})
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
		} catch(e: any) {
			// console.log('error in fetching my applications ', e);
		}
	}

	const handleScroll = useCallback(() => {
		const { current } = containerRef
		if(!current) {
			return
		}

		const parentElement = (current as HTMLElement)?.parentNode as HTMLElement
		const reachedBottom = Math.abs(
			parentElement.scrollTop
			- (parentElement.scrollHeight - parentElement.clientHeight),
		) < 10
		if(reachedBottom) {
			getMyApplicationsData()
		}
	}, [containerRef, getMyApplicationsData])

	useEffect(() => {
		if(!accountData) {
			return
		}

		getMyApplicationsData()

	}, [accountData?.address])

	useEffect(() => {
		const { current } = containerRef
		if(!current) {
			return
		}

		const parentElement = (current as HTMLElement)?.parentNode as HTMLElement
		parentElement.addEventListener('scroll', handleScroll)

		// eslint-disable-next-line consistent-return
		return () => parentElement.removeEventListener('scroll', handleScroll)
	}, [handleScroll])

	useEffect(() => {
		if(typeof window === 'undefined') {
			return
		}

		const didHaveWallet = localStorage.getItem('wagmi.wallet')
		const didMigrate = localStorage.getItem('didMigrate') === 'true'
		if(!didHaveWallet && !didMigrate) {
			localStorage.setItem('didMigrate', 'true')
		}

		if(didHaveWallet && !didMigrate) {
			setRequiresMigrate(true)
		}
	}, [])

	return buildComponent()
}

YourProposals.getLayout = function(page: ReactElement) {
	return (
		<NavbarLayout>
			{page}
		</NavbarLayout>
	)
}

function MigrateToGaslessHeader() {
	const router = useRouter()
	const navigateToMigrateModal = () => router.push({ query: { migrate: 'yes' } })

	return (
		<HStack
			w='full'
			color='white'
			justify='center'
			p={3}
			spacing={2}
			bg='violet.2'>
			<InfoIcon />
			<Text>
				Migrate to a gasless experience
			</Text>
			<Button
				onClick={navigateToMigrateModal}
				variant='solid'
				borderRadius='12px'
				h='30px'
				w='20px'
				color='violet.2'>
				Go
			</Button>
		</HStack>
	)
}

export default YourProposals