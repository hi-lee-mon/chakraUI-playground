/**
 * ・Flexを内蔵。デフォルトの方向はcolumns
 * ・Stackはspacingを指定することで均等な間隔を持たせることができる
 * ・VStackはStackの機能+デフォルトでalignItemsのcenterを適用する。報告はcolumns
 * ・HStackはVStackと似ているが報告がrowになる。
 */

import { Box, Stack } from '@chakra-ui/react';

const MyStack = () => {
  return (
    <Stack spacing="24px">
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
    </Stack>
  );
};

export default MyStack;
