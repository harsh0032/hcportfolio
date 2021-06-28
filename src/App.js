import {Spacer, Flex, VStack, Heading, IconButton } from '@chakra-ui/react';
import { FaSun, FaMoon, FaInstagram, FaLinkedin, FaGithub, FaLink} from 'react-icons/fa';
import {useColorMode} from "@chakra-ui/react";
import Header from "./components/Header";
import Profile from "./components/Profile";
import Social from './components/Social';

function App() {

  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";

  return (
    
    <VStack p={5}>
      <Flex w="100%">
        <Heading ml="8" size ="md" fontWeight="semibold" color="cyan.400">
          I am Harsh Chauhan
        </Heading>

    <Spacer></Spacer>
     
      <IconButton ml ={2} icon = {<FaInstagram />} isRound='true' onClick={toggleColorMode}></IconButton>
      <IconButton ml ={2} icon = {<FaLinkedin />} isRound='true' onClick={toggleColorMode}></IconButton>
      <IconButton ml ={2} icon = {<FaGithub />} isRound='true' onClick={toggleColorMode}></IconButton>
      <IconButton ml = {8} icon = {isDark ? <FaSun /> : <FaMoon /> } isRound='true' onClick={toggleColorMode}>
      </IconButton>
      </Flex>

      <Header></Header>
      <Social></Social>
      <Profile></Profile>
    </VStack>
  );
}

export default App;
