import axios from 'axios';
import { URL } from '../url';

export default async function getPokemonDetail(id) {
  const response = await axios.get(`${URL}/pokemon/${id}`);
  const data = response.data;
  const status = response.status;
  return { data, status };
}
