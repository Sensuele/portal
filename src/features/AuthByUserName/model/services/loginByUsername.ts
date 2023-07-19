import axios from 'axios';
import { AxiosResponse } from 'axios';

const BASE_URL = 'http://localhost:8000';

interface LoginByUsernameProps {
  username: string;
  password: string;
}

interface LoginRequest {
  login(username: string, password: string);
}

export class Login implements LoginRequest {
  public async login(username: string, password: string) {
    const response = await axios.post(BASE_URL + '/login', {
      username,
      password
    });
    if (!response.data) {
      throw new Error();
    }
    localStorage.setItem('user', JSON.stringify(response.data));
    return response.data;
  }
  public logout() {
    localStorage.removeItem('user');
  }
}
