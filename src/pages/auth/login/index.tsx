// ** Next
import { GetServerSideProps, NextPage } from 'next';

// ** Libs
import { parseCookies } from 'nookies';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

// ** Hooks
import { useAuth } from '@/hooks/useAuth';

// ** Types
import { LoginFormTypes } from '@/types';

// ** Styles
import {
  Button,
  FlexContainer,
  Form,
  Input,
  InputLabel,
  MainContainer,
  RegisterLink,
  GreetingText,
  LoginErrorSpan,
} from '../styles';

const REQUIRED_MESSAGE = 'Campo obrigatório';

const loginFormSchema = yup.object({
  email: yup.string().required(REQUIRED_MESSAGE).email('Email inválido'),
  password: yup.string().required(REQUIRED_MESSAGE),
});

const Login: NextPage = () => {
  const auth = useAuth();
  const {
    register,
    formState: { errors },
    handleSubmit,
    control,
    setError,
  } = useForm<LoginFormTypes>({
    resolver: yupResolver(loginFormSchema),
  });

  const onSubmit = (formData: LoginFormTypes) => {
    auth.signIn(formData, (status: 401 | 404) => {
      if (status == 404) {
        setError('email', { message: 'Email incorreto' });
      }

      if (status == 401) {
        setError('password', { message: 'Senha incorreta' });
      }
    });
  };

  return (
    <MainContainer>
      <FlexContainer $justify="center">
        <GreetingText>Olá, seja bem-vindo(a) ao Garage Manager 🪛</GreetingText>
      </FlexContainer>

      <Form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="email"
          control={control}
          render={({ field: { onChange, value } }) => (
            <InputLabel>
              E-mail
              <Input
                type="email"
                placeholder="email@garagemanager.com"
                autoComplete="off"
                {...register('email')}
                value={value}
                onChange={onChange}
              />
            </InputLabel>
          )}
        />
        {errors.email && (
          <LoginErrorSpan className="text-red-500 text-xs mt-[-12px] h-4">
            {errors.email.message}
          </LoginErrorSpan>
        )}

        <Controller
          name="password"
          control={control}
          render={({ field: { onChange, value } }) => (
            <InputLabel>
              Senha
              <Input
                type="password"
                placeholder="Sua senha"
                autoComplete="off"
                {...register('password')}
                value={value}
                onChange={onChange}
              />
            </InputLabel>
          )}
        />
        {errors.password && (
          <LoginErrorSpan className="text-red-500 text-xs mt-[-12px] h-4">
            {errors.password.message}
          </LoginErrorSpan>
        )}

        <Button type="submit">
          {auth.isLoading ? <div className="custom-loader"></div> : 'Entrar'}
        </Button>
      </Form>

      <RegisterLink href="/auth/register">Criar conta</RegisterLink>
    </MainContainer>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { garageManagerToken } = parseCookies(ctx);

  if (garageManagerToken) {
    return {
      redirect: {
        destination: '/dashboard',
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
};

export default Login;
