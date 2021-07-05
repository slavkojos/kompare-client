import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  Button,
  PopoverArrow,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  ButtonGroup,
} from '@chakra-ui/react';
import { RiDeleteBinLine } from 'react-icons/ri';
import { useDisclosure } from '@chakra-ui/hooks';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteUserById, fetchUsers } from '../store/usersSlice';

export const ConfirmDelete = ({ userId }) => {
  const [isOpen, setIsOpen] = useState(false);
  const open = () => setIsOpen(!isOpen);
  const close = () => setIsOpen(false);
  const dispatch = useDispatch();

  return (
    <Popover placement={'right'} isOpen={isOpen} onClose={close}>
      <PopoverTrigger>
        <Button
          leftIcon={<RiDeleteBinLine />}
          colorScheme="red"
          variant="solid"
          onClick={() => open()}
        >
          Obriši
        </Button>
      </PopoverTrigger>
      <PopoverContent>
        <PopoverArrow />
        <PopoverBody>
          Jeste li sigurni da zelite obrisati ovog korisnika?
        </PopoverBody>
        <PopoverFooter d="flex" justifyContent="flex-end">
          <ButtonGroup size="sm">
            <Button
              variant="outline"
              onClick={() => {
                console.log('trying to delete', userId);
                dispatch(deleteUserById(userId));
                close();
              }}
            >
              Da
            </Button>
            <Button colorScheme="red" onClick={() => close()}>
              Ne
            </Button>
          </ButtonGroup>
        </PopoverFooter>
      </PopoverContent>
    </Popover>
  );
};
