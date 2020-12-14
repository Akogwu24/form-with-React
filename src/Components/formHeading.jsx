import React from 'react';
import {Heading, Link, Box} from '@chakra-ui/react';

function Header() {
    return(
        <Box textAlign='center' mb='10px'>
            <Heading color='#e1e6ed' fontSize='4rem'>Hi, Welcome </Heading>
            <Link fontSize='1.2rem' color='#f5f6f7'>Start your 14 days trial here.</Link>
        </Box>
        
    )
}

export default Header;