# template-vite-react-ts-lint-format-test

## React

v18

## start

npm run dev

## eslint

npm run lint
npm run lint:fix

## prettier

## testing library

# Chakra UI の使い方

- ルートコンポーネントを ChakraProvider でラップすることで Provide 配下で利用可能になる。

# この PJ について

- components 配下に接頭辞 My+ドキュメントページ名 のコンポーネントを配置する
- Stack コンポーネントを利用するなら MyStack とする。
- 表示の確認は App.tsx で行っている

# Styling

https://chakra-ui.com/docs/styled-system/style-props

- Props を利用して Styling が可能。
- Style Props と呼ぶ
- 基本的にすべての CSS プロパティが Props として用意されている。疑似要素なども含む
- いくつかの CSS プロパティにはショートハンドが用意されている。例えば maxWidth は maxW
- コンポーネント毎に利用できるショートハンドが異なるのでドキュメントを参照
- Theme Key もここで確認できる。Theme を編集する際は要チェック
