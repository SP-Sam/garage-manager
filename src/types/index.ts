export type LoginFormTypes = { email: string; password: string };

export type RegisterFormTypes = {
  fullName: string;
  email: string;
  password: string;
  mobile: string;
  taxId: string;
};

export type LoginErrorCallbackTypes = (statusCode: 404 | 401) => void;

export type RegisterErrorCallbackTypes = (statusCode: number) => void;

export type TokenDataTypes = {
  sub: number;
  fullName: string;
  email: string;
  role: string;
};

export type AuthValuesTypes = {
  isLoading: boolean;
  tokenData: TokenDataTypes | null;
  signIn: (
    data: LoginFormTypes,
    errorCallback?: LoginErrorCallbackTypes
  ) => void;
  signUp: (
    data: RegisterFormTypes,
    errorCallback?: RegisterErrorCallbackTypes
  ) => void;
};

export type DashboardCardTypes = {
  title: string;
  description: string;
  icon: string;
  toPage: string;
};

export type CarPartCardTypes = {
  id: number;
  name: string;
  price: number;
};
