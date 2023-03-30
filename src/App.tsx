import { Divider } from '@chakra-ui/react';
import MyBox from './compoents/MyBox';
import MyFlex from './compoents/MyFlex';
import MyHeading from './compoents/MyHeading';
import MyStack from './compoents/MyStack';
import MyStyleProps from './compoents/MyStyleProps';
import MyText from './compoents/MyText';
import ChakraUiForBeginners from './tutorial/ChakraUiForBeginners';

const App = () => {
  const components = [MyBox, MyFlex, MyStack, MyText, MyHeading, MyStyleProps];
  return (
    <div>
      {components.map((Component) => (
        <>
          <Component />
          <Divider m={10} />
        </>
      ))}
      <Divider m={10} />
      <ChakraUiForBeginners />
    </div>
  );
};

export default App;
