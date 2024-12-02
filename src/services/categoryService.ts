import { apiClient } from './apiClient';

export const CategoryService = {
  async getCategories() {
    try {
      const response = await apiClient.get('/categories');
      return response.data;
    } catch (error) {
      console.error('Error fetching categories', error);
    }
  },
};
