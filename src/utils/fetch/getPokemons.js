import axios from 'axios';
import { URL } from '../url';

export async function getPokemons(limit, offset) {
  const response = await axios.get(`${URL}/pokemon?limit=${limit}&offset=${offset}`);
  const data = response.data;
  const status = response.status;
  return { data, status };
}
