import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import { Box, Button, Input, FormLabel } from '@chakra-ui/react';


export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <form  onSubmit={handleSubmit} autoComplete="off">
      <Box maxW='md' borderWidth='1px' borderRadius='lg' padding='20px 10px 20px 20px' marginTop='50px'>
        <FormLabel>
          Email
          <Input type="email" name="email" required />
        </FormLabel>
      
        <FormLabel>
          Password
          <Input type="password" name="password" required />
        </FormLabel>
        <Button marginTop='20px' colorScheme='blue' size='lg' type="submit">Log In</Button>
      </Box>
    </form>
  );
};
