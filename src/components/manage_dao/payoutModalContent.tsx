import {
  ModalBody,
  Flex,
  Text,
  Button,
  IconButton,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  Heading,
  useClipboard,
  useToast,
} from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import { trimAddress } from '../../utils/formattingUtils';

// import InfoToast from '../ui/infoToast';
// import Loader from 'src/components/ui/loader';

interface Props {
  payMode: number;
  address: string | any;
  reviews: number;
  onClose: () => void;
}

function PayoutModalContent({ payMode, address, reviews, onClose }: Props) {
  const [reviewsToPay, setReviewsToPay] = useState<number>();
  const [amountToPay, setAmountToPay] = useState<number>();

  const toast = useToast();

  const { hasCopied, onCopy } = useClipboard(address);

  const onChangeReviews = (e: any) => {
    setReviewsToPay(e.target.value);
  };

  const onChangeAmount = (e: any) => {
    setAmountToPay(e.target.value);
  };

  const fillReviews = () => {
    setReviewsToPay(reviews);
  };

  useEffect(() => {
    console.log(reviewsToPay, amountToPay);
  }, [reviewsToPay, amountToPay]);

  return (
    <ModalBody>
      {payMode === 0 && (
        <Flex direction="column" gap="1rem">
          <Flex
            w="100%"
            mt={7}
            direction="row"
            justify="space-between"
            align="center"
          >
            <Heading fontSize="0.875rem" textAlign="left">
              Address:
            </Heading>
            <Text fontSize="0.875rem">
              {trimAddress(address, 8)}{' '}
              <IconButton
                alignItems="center"
                justifyItems="center"
                _focus={{ boxShadow: 'none' }}
                aria-label="Back"
                variant="ghost"
                _hover={{}}
                _active={{}}
                icon={
                  <Image
                    src={
                      !hasCopied
                        ? '/ui_icons/copy/normal.svg'
                        : '/ui_icons/copy/active.svg'
                    }
                  />
                }
                onClick={() => onCopy()}
              />
            </Text>
          </Flex>
          <Flex direction="column" gap="0.25rem">
            <Heading fontSize="0.875rem" textAlign="left">
              Reviews:
            </Heading>
            <InputGroup size="md">
              <Input
                pr="4.5rem"
                placeholder="Enter number of reviews"
                min={1}
                max={reviews}
                isInvalid={
                  (reviewsToPay as any) > reviews || (reviewsToPay as any) < 1
                }
                onChange={(e) => onChangeReviews(e)}
                value={reviewsToPay}
              />
              <InputRightElement width="4.5rem">
                <Button
                  bg="none"
                  color="#8850EA"
                  fontWeight="bold"
                  h="1.75rem"
                  size="sm"
                  onClick={() => fillReviews()}
                >
                  ALL
                </Button>
              </InputRightElement>
            </InputGroup>
            <Text fontSize="0.75rem">
              {(reviewsToPay as any) > reviews
                ? `You can not pay more than ${reviews} reviews`
                : (reviewsToPay as any) < 1 &&
                  'You need to pay at least 1 review'}
            </Text>
          </Flex>
          <Flex direction="column" gap="0.25rem">
            <Heading fontSize="0.875rem" textAlign="left">
              Amount per Review
            </Heading>
            <Input
              pr="4.5rem"
              placeholder="Enter Amount"
              onChange={(e) => onChangeAmount(e)}
              value={amountToPay}
            />
          </Flex>

          <Text fontSize="0.75rem" alignItems="center">
            <Image
              display="inline-block"
              alt="wallet_info"
              src="/ui_icons/info_brand.svg"
            />
            By pressing Make Payment you will have to approve the transaction in
            your wallet
          </Text>
          <Button variant="primary" my={8} onClick={() => onClose()}>
            Make Payment
          </Button>
        </Flex>
      )}

      {/*payMode === 0 && (
          <Flex direction="column" gap="0.5rem">
            <Flex w="100%" mt={7} direction="row" justify="space-between" align="center">
              <Heading fontSize="0.875rem" textAlign="left">
                Address:
              </Heading>
              <Text fontSize="0.875rem">
                {trimAddress(address)} <IconButton
                  aria-label="Back"
                  variant="ghost"
                  _hover={{}}
                  _active={{}}
                  icon={<Image mr={8} src={!hasCopied ? "/ui_icons/copy/normal.svg" : "/ui_icons/copy/active.svg"} />}
                  onClick={() => onCopy()}
                />
              </Text>
            </Flex>
            <Flex direction="column" gap="0.25rem">
            <Heading fontSize="0.875rem" textAlign="left">
              Reviews:
            </Heading>
            <InputGroup size='md'>
              <Input
                pr='4.5rem'
                placeholder='Enter number of reviews'
                min={1}
                max={reviews}
                onChange={(e) => onChange(e)}
                value={reviewsToPay}
              />
              <InputRightElement width='4.5rem'>
                <Button bg="none" color="brand" h='1.75rem' size='sm' onClick={() => fillReviews}>
                  ALL
                </Button>
              </InputRightElement>
            </InputGroup>
            </Flex>
            <Flex direction="column" gap="0.25rem">
            <Heading fontSize="0.875rem" textAlign="left">
              Amount per Review
            </Heading>
            <Input
              pr='4.5rem'
              placeholder='Enter Amount'
              onChange={(e) => onChange(e)}
              value={amountToPay}
            />
            </Flex>

            <Text fontSize="0.75rem">
              By pressing Make Payment you will have to approve the transaction in
              your wallet
            </Text>
            <Button variant="primary" my={8} onClick={() => onClose()}>
              Make Payment
            </Button>
          </Flex>
        )*/}
    </ModalBody>
  );
}

export default PayoutModalContent;
