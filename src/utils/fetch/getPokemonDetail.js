import axios from 'axios';
import { URL } from '../url';

export async function getPokemonDetail(id) {
  const response = axios.get(`${URL}/pokemon/${id}`);
  const data = response.data;
  const status = response.status;
  return { data, status };
};
