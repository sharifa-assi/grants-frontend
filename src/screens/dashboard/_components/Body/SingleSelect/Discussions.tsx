import { useContext, useMemo, useState } from 'react'
import { Button, CircularProgress, Divider, Flex, Image, Text } from '@chakra-ui/react'
import { convertToRaw, EditorState } from 'draft-js'
import logger from 'src/libraries/logger'
import TextEditor from 'src/libraries/ui/RichTextEditor/textEditor'
import TextViewer from 'src/libraries/ui/RichTextEditor/textViewer'
import { ApiClientsContext, WebwalletContext } from 'src/pages/_app'
import useAddComment from 'src/screens/dashboard/_hooks/useAddComment'
import useGetComments from 'src/screens/dashboard/_hooks/useGetComments'
import useQuickReplies from 'src/screens/dashboard/_hooks/useQuickReplies'
import { formatTime } from 'src/screens/dashboard/_utils/formatters'
import { CommentType } from 'src/screens/dashboard/_utils/types'
import { DashboardContext } from 'src/screens/dashboard/Context'
import getAvatar from 'src/utils/avatarUtils'
import { formatAddress, getFieldString } from 'src/utils/formattingUtils'
import { getUrlForIPFSHash } from 'src/utils/ipfsUtils'

function Discussions() {
	const buildComponents = () => {
		return (
			<Flex
				px={5}
				py={4}
				w='100%'
				h='35%'
				overflowY='auto'
				boxShadow='0px 2px 4px rgba(29, 25, 25, 0.1)'
				bg='white'
				direction='column'>
				<Text fontWeight='500'>
					Discussion
				</Text>
				<Flex
					mt={4}
					w='100%'>
					<Image
						src='/v2/images/qb-discussion.svg'
						boxSize='36px' />
					<Flex
						ml={4}
						direction='column'>
						<Text
							variant='v2_metadata'
							fontWeight='500'
							color='gray.6'>
							FEW WAYS TO START THE DISCUSSION.
						</Text>
						<Flex
							direction='column'
						>
							{
								Array.from(Array(Math.floor(quickReplies[role].length / 2)).keys()).map((_, index) => {
									const reply1 = quickReplies[role]?.[index * 2]
									const reply2 = quickReplies[role]?.[index * 2 + 1]
									return (
										<Flex
											key={index}
											mt={3}>
											{reply1 && tagButton(reply1.icon, reply1.title, index * 2)}
											{reply2 && tagButton(reply2.icon, reply2.title, index * 2 + 1)}
										</Flex>
									)
								})
							}
						</Flex>
					</Flex>
				</Flex>
				<Flex
					mt={4}
					w='100%'>
					<Image
						borderRadius='3xl'
						boxSize='36px'
						src={(role === 'builder' || role === 'community') ? getAvatar(false, scwAddress?.toLowerCase()) : workspace?.members?.find(member => member.actorId.toLowerCase() === scwAddress?.toLowerCase())?.profilePictureIpfsHash ? getUrlForIPFSHash(workspace?.members?.find(member => member.actorId.toLowerCase() === scwAddress?.toLowerCase())?.profilePictureIpfsHash ?? '') : getAvatar(false, scwAddress?.toLowerCase())}
					/>
					<Flex
						ml={4}
						direction='column'
						w='100%'>
						<TextEditor
							value={text}
							onChange={setText}
							placeholder='Add a comment here' />
						<Flex
							mt={4}
							align='center'>
							{
								step !== undefined && (
									<Flex align='center'>
										{
											step < 3 && (
												<CircularProgress
													isIndeterminate
													color='black'
													size='18px' />
											)
										}
										<Text
											ml={2}
											variant='v2_body'>
											Adding comment...
										</Text>
										{/* {
											transactionHash && (
												<IconButton
													ml={1}
													variant='ghost'
													icon={<ExternalLinkIcon />}
													aria-label='txn-link'
													onClick={
														() => {
															window.open(getExplorerUrlForTxHash(chainId, transactionHash), '_blank')
														}
													} />
											)
										} */}
									</Flex>
								)
							}
							<Button
								ml='auto'
								variant='primaryMedium'
								isDisabled={isDisabled}
								onClick={
									async() => {
										const ret = await addComment(text, tags)
										if(ret) {
											setText(EditorState.createEmpty())
											refresh()
										}
									}
								}>
								Post
							</Button>
						</Flex>

					</Flex>
				</Flex>

				<Divider
					my={4}
					color='gray.3'
					height={1} />

				{comments.filter((comment) => comment.sender && (comment.workspace.members.some((member) => member.actorId.toLowerCase() === comment.sender?.toLowerCase()) || comment.sender?.toLowerCase() === proposal?.applicantId.toLowerCase())).map(renderComment)}
			</Flex>
		)
	}

	const tagButton = (icon: string, title: string, index: number) => {
		return (
			<Button
				key={index}
				ml={3}
				// w='100%'
				justifyContent='start'
				py={1}
				px={3}
				borderRadius='2px'
				leftIcon={
					<Image
						boxSize='24px'
						src={icon} />
				}
				bg={index in selectedTags ? 'accent.azure' : 'gray.2'}
				onClick={
					() => {
						const tags = { ...selectedTags }
						logger.info('tags: ', tags)
						if(tags[index]) {
							delete tags[index]
						} else {
							tags[index] = true
						}

						setSelectedTags(tags)
					}
				}
			>
				<Text
					fontWeight='400'
					color={index in selectedTags ? 'white' : 'black.1'}>
					{title}
				</Text>
			</Button>
		)
	}

	const renderComment = (comment: CommentType, index: number) => {
		const member = comment.workspace.members.find((member) => member.actorId.toLowerCase() === comment.sender?.toLowerCase())

		return (
			<Flex
				align='start'
				mt={index === 0 ? 0 : 4}>
				<Image
					borderRadius='3xl'
					boxSize='36px'
					src={(comment.role === 'builder' || comment.role === 'community') ? getAvatar(false, comment.sender?.toLowerCase() ?? '') : member?.profilePictureIpfsHash ? getUrlForIPFSHash(member.profilePictureIpfsHash) : getAvatar(false, member?.actorId)} />
				<Flex
					ml={3}
					direction='column'>
					<Flex align='center'>
						<Text fontWeight='500'>
							{getCommentDisplayName(comment)}
						</Text>
						<Text
							ml={3}
							variant='v2_metadata'
							borderRadius='3px'
							bg={comment?.role === 'admin' || comment?.role === 'reviewer' ? 'gray.3' : 'accent.vodka'}
							px={1}>
							{comment?.role === 'admin' || comment?.role === 'reviewer' ? 'Member' : 'Builder'}
						</Text>
						{
							comment?.timestamp && (
								<Text
									ml={2}
									variant='v2_body'
									color='gray.5'>
									{formatTime(comment?.timestamp)}
								</Text>
							)
						}
					</Flex>
					<TextViewer text={comment?.message ?? ''} />
				</Flex>
			</Flex>
		)
	}

	const { scwAddress } = useContext(WebwalletContext)!
	const { workspace, role } = useContext(ApiClientsContext)!
	const { proposals, selectedProposals } = useContext(DashboardContext)!
	const { quickReplies } = useQuickReplies()

	const [step, setStep] = useState<number>()
	const [, setTransactionHash] = useState('')

	const [ selectedTags, setSelectedTags ] = useState<{[key: number]: boolean}>({})

	const tags = useMemo(() => {
		return Object.keys(selectedTags).map((key) => parseInt(key, 10))
	}, [selectedTags])

	const [ text, setText ] = useState<EditorState>(EditorState.createEmpty())
	const { addComment, isBiconomyInitialised } = useAddComment({ setStep, setTransactionHash })
	const { comments, refresh } = useGetComments()

	const proposal = useMemo(() => {
		const index = selectedProposals.indexOf(true)

		if(index !== -1) {
			return proposals[index]
		}
	}, [proposals, selectedProposals])

	const isDisabled = useMemo(() => {
		if(!isBiconomyInitialised || step !== undefined) {
			return true
		}

		return convertToRaw(text.getCurrentContent()).blocks[0].text.length === 0
	}, [text, step])

	const getCommentDisplayName = (comment: CommentType) => {
		if(comment.role === 'admin' || comment.role === 'reviewer') {
			const member = comment.workspace.members.find((member) => member.actorId.toLowerCase() === comment.sender?.toLowerCase())
			if(member?.fullName) {
				return member?.fullName
			} else if(member?.actorId) {
				return formatAddress(member?.actorId)
			} else {
				return 'No name found'
			}
		} else {
			if(comment.role === 'builder') {
				return getFieldString(proposal, 'applicantName')
			} else if(comment.role === 'community') {
				return formatAddress(comment.sender ?? '')
			}
		}
	}

	return buildComponents()
}

export default Discussions