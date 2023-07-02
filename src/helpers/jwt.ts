import { TokenDataTypes } from '@/types';
import jwtDecode from 'jwt-decode';

export const getTokenData = (token: string) => {
  const { sub, fullName, email, role }: TokenDataTypes = jwtDecode(token);

  return { sub, fullName, email, role };
};
