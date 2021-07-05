import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Box,
  Input,
  Flex,
  Button,
  Center,
  Heading,
} from '@chakra-ui/react';
import { useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { postNewUser } from '../store/usersSlice';

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const nameInput = useRef();
  const surnameInput = useRef();
  const emailInput = useRef();
  const [disabled, setDisabled] = useState(true);
  const submitForm = () => {
    dispatch(
      postNewUser({
        name: nameInput.current.value,
        surname: surnameInput.current.value,
        email: emailInput.current.value,
      })
    );
    nameInput.current.value = '';
    surnameInput.current.value = '';
    emailInput.current.value = '';
  };
  const checkInputs = () => {
    if (
      nameInput.current.value.length > 0 &&
      surnameInput.current.value.length > 0 &&
      emailInput.current.value.length > 0
    ) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };

  return (
    <Box
      w={'75%'}
      borderRadius="lg"
      borderColor="gray.100"
      border="1px"
      p={3}
      my={4}
    >
      <Center>
        <Heading>Unesi novog korisnika</Heading>
      </Center>
      <FormControl id="fName" isRequired my={2}>
        <FormLabel>Ime</FormLabel>
        <Input placeholder="Ime" ref={nameInput} onChange={checkInputs} />
      </FormControl>
      <FormControl id="surname" isRequired my={2}>
        <FormLabel>Prezime</FormLabel>
        <Input
          placeholder="Prezime"
          ref={surnameInput}
          onChange={checkInputs}
        />
      </FormControl>
      <FormControl id="email" isRequired my={2}>
        <FormLabel>Email</FormLabel>
        <Input
          placeholder="Email"
          type="email"
          ref={emailInput}
          onChange={checkInputs}
        />
      </FormControl>
      <Center>
        <Button
          colorScheme="teal"
          size="lg"
          my={2}
          disabled={disabled}
          onClick={() => {
            submitForm();
          }}
        >
          Pošalji
        </Button>
      </Center>
    </Box>
  );
};
