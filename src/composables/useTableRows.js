import useConfig from './useConfig';
import { default as axios } from 'axios';

const config = useConfig();

const reqHeaders = {
  headers: {
    Accept: 'application/json, text/plain, */*',
    'Content-Type': 'application/json; charset=UTF-8'
  }
};

export default (payload) => {
  return axios.post(
    `${config.chainAPIUrl}/v1/chain/get_table_rows`,
    payload,
    reqHeaders
  );
}

