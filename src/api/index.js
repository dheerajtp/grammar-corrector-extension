import axios from "axios";

import { BASE_URL } from "../configurations";

const instance = axios.create({ baseURL: BASE_URL });
instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    console.log(error);
  }
);

const APIConfiguration = {
  API: instance,
};

export default APIConfiguration;
