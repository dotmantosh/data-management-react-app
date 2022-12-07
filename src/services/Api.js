import axios from "axios";
const url = "https://data-management-api.vercel.app";
/* const url = "http://localhost:5000"; */
const Api = () => {
  return axios.create({
    baseURL: url,
  });
};

export default Api;
