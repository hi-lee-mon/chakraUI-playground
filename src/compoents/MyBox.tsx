/**
 * ・基本のコンポーネント
 * ・すべてのコンポーネントはBoxを基に作られている
 * ・デフォルトではdivにレンダリングされる
 * ・asでセマンティックにできる
 */

import { Box } from '@chakra-ui/react';

const MyBox = () => {
  return (
    <Box as="section" bg="green" w="120px" h="150px">
      MyBox
    </Box>
  );
};

export default MyBox;
