/**
 * https://chakra-ui.com/docs/components/text
 * ・テキストのコンポーネント
 * ・fontsizeはテーマを使って指定できる。例えばfontSize="lg"
 * ・asでスタイルをオーバーライド(上書き)できる。例えばas="i"でイタリック体にできる(ここら辺はドキュメントにいろいろ載っている)
 * ・noOfLinesで切り捨てる行数を指定できる。viewPortまたはmaxWidthに到達で切り捨て。末尾が...になる
 *
 */

import { Text } from '@chakra-ui/react';

const MyText = () => {
  return (
    <Text as="i" fontSize="lg" noOfLines={2}>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis quod dolorem repudiandae
      quaerat sint quis in, optio quasi hic, laudantium placeat aperiam nostrum nam ullam impedit,
      suscipit exercitationem ipsam accusamus? Ducimus, tempore ab? Architecto deleniti nisi optio
      iure quam aut, libero minima impedit ipsa eligendi quasi aspernatur eum? Itaque neque
      repellendus provident fugit quam enim officiis amet ipsam eveniet laudantium? Dolorem nam
      animi sapiente placeat perferendis unde porro soluta labore odit omnis dolor quae at corporis
      amet, sint laudantium, officia quis delectus. Aut, eum nemo ad suscipit expedita deserunt
      necessitatibus.
    </Text>
  );
};

export default MyText;
