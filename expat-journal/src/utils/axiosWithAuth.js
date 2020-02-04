import Axios from 'axios';

export const axiosWithAuth = () => {
  return Axios.create({
    // config object
    baseURL: 'http://localhost:5000',
    headers: {
      Authorization: localStorage.getItem('token')
    }
  });
};
