import {
  ChakraProvider,
  Box,
  Text,
  Link,
  Table,
  TableCaption,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Tfoot,
  Button,
  Heading,
  Center,
} from '@chakra-ui/react';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUsers, deleteUserById } from '../store/usersSlice';
import { UserRow } from './UserRow';
import { BiRefresh } from 'react-icons/bi';

export const UsersTable = () => {
  const dispatch = useDispatch();
  const users = useSelector(state => state.users.entities);
  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);
  return (
    <Table variant="simple">
      <Thead>
        <Tr>
          <Th>Ime</Th>
          <Th>Prezime</Th>
          <Th>Email</Th>
          <Th>Akcije</Th>
        </Tr>
      </Thead>
      <Tbody>
        {users.length > 0 ? (
          users.map((user, index) => {
            return <UserRow key={index} user={user} />;
          })
        ) : (
          <Heading>Još nema unesenih korisnika</Heading>
        )}
        {/* <Tr>
          <Td>inches</Td>
          <Td>millimetres (mm)</Td>
          <Td>25.4</Td>
        </Tr>
        <Tr>
          <Td>feet</Td>
          <Td>centimetres (cm)</Td>
          <Td>30.48</Td>
        </Tr>
        <Tr>
          <Td>yards</Td>
          <Td>metres (m)</Td>
          <Td>0.91444</Td>
        </Tr> */}
      </Tbody>
      <Tfoot my={2}>
        <Button
          leftIcon={<BiRefresh />}
          colorScheme="green"
          onClick={() => dispatch(fetchUsers())}
        >
          Osvježi
        </Button>
      </Tfoot>
    </Table>
  );
};
