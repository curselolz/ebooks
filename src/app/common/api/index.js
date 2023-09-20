const axios = require("axios").default;
import { BASE_URL } from '../../../var';

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  transformRequest: [
    (data) => {
      return JSON.stringify(data);
    },
  ],
  transformResponse: [
    (data) => {
      if(data) {
        return JSON.parse(data);
      }
      return [];
    },
  ],
});
export default api;

