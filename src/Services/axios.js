import axios from 'axios';
const BASE_URL = 'https://api.ayawma.com'
<<<<<<< HEAD
// const BASE_URL = 'http://localhost:3005'
=======
//const BASE_URL = 'http://localhost:3005'
>>>>>>> 696197b39831290a4e62ed7fcc57aba523d08857
export default axios.create({
    baseURL: BASE_URL,
    origin: true,
    headers: {'Content-Type': 'application/json' }, 
    withCredentials: true
});

export const axiosPrivate = axios.create({
    baseURL: BASE_URL,
    headers: { 'Content-Type': 'application/json'},
    withCredentials: true
});