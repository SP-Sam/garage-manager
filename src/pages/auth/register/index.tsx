import { NextPage } from 'next';
import {
  Button,
  FlexContainer,
  Form,
  GreetingText,
  Input,
  InputLabel,
  MainContainer,
  RegisterLink,
} from '../styles';

const Register: NextPage = () => {
  return (
    <MainContainer>
      <FlexContainer $justify="center">
        <GreetingText>Crie sua conta no Garage Manager 🪛</GreetingText>
      </FlexContainer>

      <Form>
        <InputLabel>
          Nome completo
          <Input type="text" placeholder="Samuel da Silva Pereira" />
        </InputLabel>

        <InputLabel>
          E-mail
          <Input type="password" placeholder="Sua senha" />
        </InputLabel>

        <InputLabel>
          Senha
          <Input type="password" placeholder="Sua senha" />
        </InputLabel>

        <InputLabel>
          Telefone
          <Input type="password" placeholder="Sua senha" />
        </InputLabel>

        <InputLabel>
          CPF
          <Input type="password" placeholder="Sua senha" />
        </InputLabel>

        <Button type="submit">Criar conta</Button>
      </Form>

      <RegisterLink href="/auth/login">Voltar ao login</RegisterLink>
    </MainContainer>
  );
};

export default Register;
