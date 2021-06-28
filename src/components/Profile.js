import React from 'react'
import {useMediaQuery} from '@chakra-ui/media-query';
import { ColorModeScript } from '@chakra-ui/react';
import {Flex, Heading, Box, Text} from '@chakra-ui/layout'
import Icon from '@chakra-ui/icon'
import {DiCodeigniter, DiAndroid, DiWebplatform} from 'react-icons/di'

function Profile() {
    const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");
    
    return (
        
        <Flex direction = {isNotSmallerScreen ? "row" : "coloumn"} w="100%" maxWidth={{base: "100vh", md: "130vh", lg: "130vh", xl: "130vh"}}>
        <Box alignSelf="center" px="32" py="16">
            <Heading fontWeight="extrabold" color="cyan.500" size="4xl">
                2+
            </Heading>
            <Text fontSize="2xl" color="gray.400">
                Years of experience
            </Text>
        </Box>

        <Box alignSelf="center" px="32" py="16">
            <Text fontWeight = "bold" fontSize ="2xl">
                Product Designer and Developer, specialised in mobile app development.
             </Text>

             <Flex direction={isNotSmallerScreen ? "row" : "column"} mt={8} >
                 <Flex rounded="xl" direction="column" mt={4} bg="blue.400" h="30vh" w="30vh" justify="flex-end" _hover={{bg: "teal.400"}}>
                     <Icon color="white" p="4" as={DiAndroid} w="24" h="24" />
                     <Text color="white" p="4" fontSize="xl" fontWeight="semibold">
                        Android apps
                    </Text>                 
                  </Flex>

                  <Flex rounded="xl" direction="column" mt={4} bg="blue.400" h="30vh" w="30vh" justify="flex-end" _hover={{bg: "teal.400"}}>
                     <Icon color="white" p="4" as={DiCodeigniter} w="24" h="24" />
                     <Text color="white" p="4" fontSize="xl" fontWeight="semibold">
                        Flutter apps
                    </Text>                 
                  </Flex>

                  <Flex rounded="xl" direction="column" mt={4} bg="blue.400" h="30vh" w="30vh" justify="flex-end" _hover={{bg: "teal.400"}}>
                     <Icon color="white" p="4" as={DiWebplatform} w="24" h="24" />
                     <Text color="white" p="4" fontSize="xl" fontWeight="semibold">
                        Web apps
                    </Text>                 
                  </Flex>

             </Flex>
        </Box>
        </Flex>
        
    )
}

export default Profile
