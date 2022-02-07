import {
  ModalBody, Flex, Text, Button, Image, Heading,
} from '@chakra-ui/react';
import React from 'react';

interface Props {
  onClose: () => void;
}

function ModalContent({
  onClose,
}: Props) {
//   const [details, setDetails] = useState('');
//   const [detailsError, setDetailsError] = useState(false);

  return (
    <ModalBody>
      <Flex direction="column" justify="start" align="center">
        <Image w="127px" h="147px" src="/images/pink_flying_comp.svg" />
        <Heading mt={8} textAlign="center" variant="applicationHeading">
          You have marked the Milestone 1 as done.
        </Heading>
        <Text mt={4} textAlign="center" variant="applicationText">
          You will shortly receive a confirmation and reward if any from the grant publisher.
        </Text>
        <Flex direction="row" w="100%" justify="space-evenly" mt={10} mb={4}>
          <Button w="45%" variant="resubmit" color="brand.500" _hover={{ background: '#F5F5F5', borderColor: 'brand.500', borderWidth: '2px' }} onClick={onClose}>Cancel</Button>
          <Button w="45%" variant="primary">Send Funds</Button>
        </Flex>
      </Flex>
    </ModalBody>
  );
}

export default ModalContent;
