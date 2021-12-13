import axios from 'axios';

//Resolvi somente utilizar uma baseURL e chamar diretamente as rotas pela simplicidade das mesmas, mas numa escala maior
//seria ideal trabalhar com services separados e tratados individualmente
const api = axios.create({
  baseURL: 'https://pokeapi.co/api/v2/',
});

export default api;
