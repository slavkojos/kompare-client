import { Tr, Th, Td, Button } from '@chakra-ui/react';
import { ConfirmDelete } from './ConfirmDelete';

export const UserRow = ({ user }) => {
  return (
    <Tr>
      <Td>{user.name}</Td>
      <Td>{user.surname}</Td>
      <Td>{user.email}</Td>
      <Td>
        <ConfirmDelete userId={user._id} />
      </Td>
    </Tr>
  );
};
