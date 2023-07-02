import axios from 'axios';
import { parseCookies } from 'nookies';

const { garageManagerToken } = parseCookies();

export const api = axios.create({ baseURL: process.env.NEXT_PUBLIC_API_URL });

if (garageManagerToken) {
  api.defaults.headers['Authorization'] = `Bearer ${garageManagerToken}`;
}
