import { useColorMode, Flex, Box, Text, Image, Button, useMediaQuery, Stack, Circle } from '@chakra-ui/react'
import React from 'react'

function Header() {

    const { colorMode } = useColorMode();
    const isDark = colorMode === "dark";

    const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");

    return (
        <Stack>
            <Circle position = "absolute" bg="blue.100" opacity="0.1" w="300px" h="300px" alignSelf="flex-end" />

            <Flex direction = {isNotSmallerScreen ? "row" : "coloumn"} spacing="200px" p={isNotSmallerScreen ? "26" : "0"} alignSelf="flex-start">

            <Box mt={isNotSmallerScreen ? "0" : 16} align = 'flex-start'>
                <Text fontSize="5xl" fontWeight="semibold">
                    Hi, I am
                </Text>
                 
                <Text fontSize="7xl" fontWeight="bold" bgGradient="linear(to-r, cyan.400, blue.500, purple.600)" bgClip = 'text'>
                Harsh Chauhan
                </Text>

                <Text color={isDark ? "gray.200" : "gray.500"}>
                    GDE - Flutter, Firebase. Founder of Coding Ninjas
                </Text>

                <Button mt={8} colorScheme="blue" onClick= {()=>
                window.open("https://www.google.in")} >
                    Hire Me
                </Button>

            </Box>

            <Image alignSelf="center" mt={isNotSmallerScreen ? "0" : "12"} mb= {isNotSmallerScreen ? "0" : "12"} borderRadius='full' backgroundColor = "transparent" boxShadow="lg" boxSize ="300px" src="https://www.google.in" />

            </Flex>
        </Stack>


    )
}

export default Header
