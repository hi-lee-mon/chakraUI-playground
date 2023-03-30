import React from 'react';
import ReactDOM from 'react-dom/client';
import { ChakraBaseProvider, extendBaseTheme, ChakraProvider } from '@chakra-ui/react';
import chakraTheme from '@chakra-ui/theme';
import App from './App';

// const { Button } = chakraTheme.components;

// const theme = extendBaseTheme({
//   components: {
//     Button,
//   },
// });

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    {/* ChakraBaseProviderを利用することでペイロードを高速化することができる */}
    {/* <ChakraBaseProvider theme={theme}> */}
    <ChakraProvider>
      <App />
    </ChakraProvider>
    {/* </ChakraBaseProvider> */}
  </React.StrictMode>
);
