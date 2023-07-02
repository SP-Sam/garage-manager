import { ReactNode, createContext, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

import { parseCookies, setCookie } from 'nookies';

import { api } from '@/services/api';
import { getTokenData } from '@/helpers/jwt';

import {
  AuthValuesTypes,
  LoginErrorCallbackTypes,
  LoginFormTypes,
  RegisterErrorCallbackTypes,
  RegisterFormTypes,
  TokenDataTypes,
} from '@/types';

const defaultValues: AuthValuesTypes = {
  isLoading: false,
  isAuthenticated: false,
  tokenData: null,
  signIn: () => Promise.resolve(),
  signUp: () => Promise.resolve(),
};

const AuthContext = createContext(defaultValues);

interface Props {
  children: ReactNode;
}

const TOKEN_MAX_AGE = 60 * 60 * 24 * 7; // 7 days

const AuthProvider = ({ children }: Props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [tokenData, setTokenData] = useState<TokenDataTypes | null>(null);
  const isAuthenticated = !!tokenData;

  const router = useRouter();

  useEffect(() => {
    const { garageManagerToken } = parseCookies();

    if (garageManagerToken) {
      const tokenData = getTokenData(garageManagerToken);

      setTokenData(tokenData);
    }
  }, []);

  const signIn = async (
    { email, password }: LoginFormTypes,
    errorCallback?: LoginErrorCallbackTypes
  ) => {
    try {
      setIsLoading(true);
      const {
        data: { access_token },
      } = await api.post('auth/login', {
        email,
        password,
      });

      setCookie(undefined, 'garageManagerToken', access_token, {
        maxAge: TOKEN_MAX_AGE,
        path: '/',
      });

      api.defaults.headers['Authorization'] = `Bearer ${access_token}`;

      const tokenData = getTokenData(access_token);

      setTokenData(tokenData);

      router.replace('/');

      setIsLoading(false);
    } catch (e: any) {
      if (errorCallback) {
        errorCallback(e.response.data.status);
      }
    } finally {
      setIsLoading(false);
    }
  };

  const signUp = async (
    formData: RegisterFormTypes,
    errorCallback?: RegisterErrorCallbackTypes
  ) => {
    const { fullName, email, password, mobile, taxId } = formData;
    try {
      setIsLoading(true);

      await api.post('/auth/register', {
        fullName,
        email,
        password,
        mobile,
        taxId,
        role: 'MANAGER',
      });

      window.alert('Cadastro realizado com sucesso');

      router.replace('/auth/login');
    } catch (e: any) {
      if (errorCallback) {
        errorCallback(e.response.data.status);
      }
    } finally {
      setIsLoading(false);
    }
  };

  const values = { isLoading, isAuthenticated, tokenData, signIn, signUp };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

export { AuthContext, AuthProvider };
