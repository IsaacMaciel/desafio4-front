import axios from 'axios';

//Define a URL base da origem para consumo do servico
export default axios.create({
  baseURL: 'https://grades-api-zhk.herokuapp.com:8708/',
  headers: {
    'Content-type': 'application/json',
  },
});
