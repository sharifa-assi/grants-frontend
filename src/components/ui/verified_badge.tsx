import {
  Popover,
  PopoverTrigger,
  Image,
  PopoverContent,
  Flex,
  Text,
  Button,
  Box,
} from '@chakra-ui/react';
import React from 'react';

interface Props {
  grantAmount: string;
  grantCurrency: string;
  lineHeight: string | number;
  marginBottom?: string | number;
}

function VerifiedBadge({
  grantAmount, grantCurrency, lineHeight, marginBottom,
}: Props) {
  return (
    <Popover trigger="hover">
      <PopoverTrigger>
        <Image
          h="20px"
          w="17px"
          display="inline-block"
          src="/ui_icons/verified.svg"
          ml={1}
          mb={marginBottom}
          lineHeight={lineHeight}
        />
      </PopoverTrigger>
      <PopoverContent bg="white" borderRadius="8px" p={4} maxW="210px">
        <Flex direction="column" align="start">
          <Text
            fontWeight="700"
            fontStyle="normal"
            fontSize="14px"
            lineHeight="16px"
          >
            Verified Grants
          </Text>
          <Text
            mt={2}
            color="#717A7C"
            fontWeight="400"
            fontStyle="normal"
            fontSize="14px"
            lineHeight="21px"
          >
            Funds deposited as reward
            {' '}
            {grantAmount}
            {' '}
            {grantCurrency}
          </Text>
          <Flex direction="row" w="100%">
            <Box mr="auto" />
            <Button
              mt={2}
              variant="link"
              color="brand.500"
              fontWeight="500"
              fontStyle="normal"
              fontSize="14px"
              lineHeight="16px"
              onClick={() => {}}
            >
              Learn More
            </Button>
          </Flex>
        </Flex>
      </PopoverContent>
    </Popover>
  );
}

VerifiedBadge.defaultProps = {
  marginBottom: 0,
};

export default VerifiedBadge;