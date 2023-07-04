// ** Next
import { NextPage } from 'next';

// ** Libs
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

// ** Hooks
import { useAuth } from '@/hooks/useAuth';

// ** Types
import { RegisterFormTypes } from '@/types';

import {
  Button,
  FlexContainer,
  Form,
  GreetingText,
  Input,
  InputLabel,
  LoginErrorSpan,
  MainContainer,
  RegisterLink,
} from '../styles';
import Head from 'next/head';

const REQUIRED_MESSAGE = 'Campo obrigatório';
const NAME_LENGTH_MESSAGE = 'O nome deve ter pelo menos 4 caracteres';
const EMAIL_FORMAT_MESSAGE = 'Formato de email inválido';
const PASSWORD_LENGTH_MESSAGE = 'Sua senha deve ter pelo menos 6 caracteres';
const MOBILE_LENGTH_MESSAGE = 'Telefone deve ter 11 caracteres';
const TAX_ID_LENGTH_MESSAGE = 'CPF deve ter 11 caracteres';
const EMAIL_CONFLICT_MESSAGE = 'E-mail já cadastrado';
const TAX_ID_CONFLICT_MESSAGE = 'CPF já cadastrado';

const registerFormSchema = yup.object({
  fullName: yup.string().min(4, NAME_LENGTH_MESSAGE).required(REQUIRED_MESSAGE),
  email: yup.string().required(REQUIRED_MESSAGE).email(EMAIL_FORMAT_MESSAGE),
  password: yup
    .string()
    .min(6, PASSWORD_LENGTH_MESSAGE)
    .required(REQUIRED_MESSAGE),
  mobile: yup
    .string()
    .length(11, MOBILE_LENGTH_MESSAGE)
    .required(REQUIRED_MESSAGE),
  taxId: yup
    .string()
    .length(11, TAX_ID_LENGTH_MESSAGE)
    .required(REQUIRED_MESSAGE),
});

const Register: NextPage = () => {
  const auth = useAuth();
  const {
    register,
    formState: { errors },
    handleSubmit,
    control,
    setError,
  } = useForm<RegisterFormTypes>({
    resolver: yupResolver(registerFormSchema),
  });

  const onSubmit = (formData: RegisterFormTypes) => {
    auth.signUp(formData, (status: number) => {
      if (status === 1) {
        setError('email', { message: EMAIL_CONFLICT_MESSAGE });
      } else {
        setError('taxId', { message: TAX_ID_CONFLICT_MESSAGE });
      }
    });
  };

  return (
    <MainContainer>
      <Head>
        <title>SignUp | Garage Manager</title>
      </Head>

      <FlexContainer $justify="center">
        <GreetingText>Crie sua conta no Garage Manager 🪛</GreetingText>
      </FlexContainer>

      <Form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="fullName"
          control={control}
          render={({ field: { onChange, value } }) => (
            <InputLabel>
              Nome completo
              <Input
                type="text"
                placeholder="Samuel da Silva Pereira"
                autoComplete="off"
                {...register('fullName')}
                value={value}
                onChange={onChange}
              />
            </InputLabel>
          )}
        />
        {errors.fullName && (
          <LoginErrorSpan className="text-red-500 text-xs mt-[-12px] h-4">
            {errors.fullName.message}
          </LoginErrorSpan>
        )}

        <Controller
          name="email"
          control={control}
          render={({ field: { onChange, value } }) => (
            <InputLabel>
              E-mail
              <Input
                type="email"
                placeholder="samuel.pereira@garagemanager.com"
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

        <Controller
          name="mobile"
          control={control}
          render={({ field: { onChange, value } }) => (
            <InputLabel>
              Telefone
              <Input
                type="number"
                placeholder="11234567890"
                autoComplete="off"
                {...register('mobile')}
                value={value}
                onChange={onChange}
              />
            </InputLabel>
          )}
        />
        {errors.mobile && (
          <LoginErrorSpan className="text-red-500 text-xs mt-[-12px] h-4">
            {errors.mobile.message}
          </LoginErrorSpan>
        )}

        <Controller
          name="taxId"
          control={control}
          render={({ field: { onChange, value } }) => (
            <InputLabel>
              CPF
              <Input
                type="number"
                placeholder="11234567890"
                autoComplete="off"
                {...register('taxId')}
                value={value}
                onChange={onChange}
              />
            </InputLabel>
          )}
        />
        {errors.taxId && (
          <LoginErrorSpan className="text-red-500 text-xs mt-[-12px] h-4">
            {errors.taxId.message}
          </LoginErrorSpan>
        )}

        <Button type="submit">
          {auth.isLoading ? (
            <div className="custom-loader"></div>
          ) : (
            'Criar conta'
          )}
        </Button>
      </Form>

      <RegisterLink href="/auth/login">Voltar ao login</RegisterLink>
    </MainContainer>
  );
};

export default Register;
