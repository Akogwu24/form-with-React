import React from 'react'
import { Input, FormControl, Button, Link, Box, Checkbox, Flex, FormLabel} from '@chakra-ui/react'

function Inputs() {
    return(
        <Box color='#dfeaf5'>
            <FormControl py='10px '>
                <FormLabel marginBottom='1px'>Enter Your Email here</FormLabel>
                <Input type='email' placeholder='email' mb='1rem'></Input>
                <FormLabel marginBottom='0'>Enter Your Secret Password here</FormLabel>
                <Input type='password' placeholder='password'></Input>
            </FormControl>

            <Flex my='8px' justifyContent='space-between'>
                <Checkbox>
                    Remember me
                </Checkbox>
                <Link>forgot Password?</Link>
            </Flex>

            <Button width='100%' color='#020e1a' fontWeight='bold' fontSize='1.5rem' mt='10px'>Log In</Button>
        </Box>
    )
}

export default Inputs;