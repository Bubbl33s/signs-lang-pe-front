import { apiClient } from './apiClient';

export const AuthService = {
  async login(email: string, password: string) {
    try {
      const response = await apiClient.post('/users/login', {
        email,
        password,
      });

      return response;
    } catch (error) {
      console.error('Error logging in', error);
    }
  },
};
