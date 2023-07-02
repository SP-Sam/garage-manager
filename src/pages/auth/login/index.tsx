import { NextPage } from 'next';

import {
  Button,
  FlexContainer,
  Form,
  Input,
  InputLabel,
  MainContainer,
  RegisterLink,
  GreetingText,
} from './styles';

const Login: NextPage = () => {
  return (
    <MainContainer>
      <FlexContainer $justify="center">
        <GreetingText>Olá, seja bem-vindo ao Garage Manager 🪛</GreetingText>
      </FlexContainer>

      <Form>
        <InputLabel>
          E-mail
          <Input type="email" placeholder="email@garagemanager.com" />
        </InputLabel>

        <InputLabel>
          Senha
          <Input type="password" placeholder="Sua senha" />
        </InputLabel>

        <Button type="submit">Entrar</Button>
      </Form>

      <RegisterLink href="/auth/register">Criar conta</RegisterLink>
    </MainContainer>
  );
};

export default Login;
