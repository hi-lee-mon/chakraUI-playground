/**
 * https://chakra-ui.com/docs/components/flex
 * ・Flexを搭載したBoxコンポーネント
 * ・スタイリングのためにいくつかショートハンドが用意されている
 * ・flexDirection is direction
 * ・flexWrap is wrap
 * ・flexBasis is basis
 * ・flexGrow is grow
 * ・flexShrink is shrink
 * ・alignItems is align
 * ・justifyContent is justify
 */

import { Box, Flex } from '@chakra-ui/react';

const MyFlex = () => {
  return (
    <Flex justify="space-between" align="center">
      <Box bg="green" w="100px" h="200px">
        item1
      </Box>
      <Box bg="blue" w="100px" h="200px">
        item2
      </Box>
      <Box bg="red" w="200px" h="200px">
        item3
      </Box>
      <Box bg="tomato" w="100px" h="200px">
        item4
      </Box>
    </Flex>
  );
};

export default MyFlex;
