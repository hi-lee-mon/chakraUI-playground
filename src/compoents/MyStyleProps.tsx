import { Box, Button, Text } from '@chakra-ui/react';
/**
 * ・Style Propsについてはドキュメントを参照
 * ・疑似要素はオブジェクトで指定できる
 */

const MyStyleProps = () => {
  return (
    <Box bg="green" h="300px" w="300px" margin="auto" mt="32px">
      <Text fontSize="32px">StylePropsExample</Text>
      <Button
        mt="32px"
        colorScheme="red"
        _hover={{ background: 'blue' }}
        _focus={{ background: 'yellow', color: 'black' }}
      >
        Click me
      </Button>
    </Box>
  );
};

export default MyStyleProps;
