import {
  ChakraProvider,
  Box,
  Text,
  Link,
  Container,
  Flex,
} from '@chakra-ui/react';
import { UsersTable } from '../components/UsersTable';
import { ColorModeSwitcher } from '../ColorModeSwitcher';
import { RegisterForm } from '../components/RegisterForm';

export const Home = () => {
  return (
    <Container maxW="container.lg">
      <Flex direction="column" align="center" justify="center">
        <UsersTable />
        <RegisterForm />
      </Flex>
    </Container>
  );
};
