import { Login } from '../services/loginByUsername';

export const useLogin = () => {
  const login = new Login();

  return {
    login: login.login
  };
};
