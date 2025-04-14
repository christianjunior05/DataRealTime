import axios from 'axios';

const API_URL = 'http://localhost:3001/login'; // change avec ton vrai endpoint

const login = async (email, password) => {
  try {
    const response = await axios.post(API_URL, { email, password });
    return response.data.token;
  } catch (err) {
    throw new Error('Login échoué');
  }
};

const authService = {
  login
};

export default authService;
