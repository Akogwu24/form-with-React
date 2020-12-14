import React from 'react';
import {Flex, Box } from '@chakra-ui/react'
import Header from "./formHeading";
import Inputs from './inputs'


function Form() {
    return(
      <Box bg='#020e1a' h='100vh' w='100v'>
        <Flex h='100%' justify='center' align='center'>
          <Box border='2px solid #b6cade' padding='50px'>
            <Header ></Header>
            <Inputs />
          </Box>
        </Flex>
      </Box>
    )
}

export default Form;