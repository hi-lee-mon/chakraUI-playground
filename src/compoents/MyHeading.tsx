/**
 * ・名前の通り見出しをレンダリングする
 * ・デフォルトはh2
 * ・as="h1"のようにして変更する
 */

import { Heading } from '@chakra-ui/react';

const MyHeading = () => {
  return <Heading fontSize="58px">MyHeading</Heading>;
};

export default MyHeading;
