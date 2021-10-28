import axios from 'axios';
import { URL } from '../url';

export default async function getPokemon(url) {
  let fetchUrl;
  if (url) {
    fetchUrl = url;
  } else {
    fetchUrl = `${URL}/pokemon?limit=12&offset=0`;
  }
  const response = await axios.get(fetchUrl);
  const data = response.data;
  const status = response.status;
  return { data, status };
}
