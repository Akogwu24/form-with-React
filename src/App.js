import React from 'react';
import {ChakraProvider,  CSSReset} from '@chakra-ui/react'

import Form from './Components/form'



function App() {
  return (
    <ChakraProvider>
      <CSSReset />
      <Form />
    </ChakraProvider>
  );
}

export default App;
