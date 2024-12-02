import { apiClient } from './apiClient';

export const LabelService = {
  async getSigns() {
    try {
      const response = await apiClient.get('/labels');
      return response.data;
    } catch (error) {
      console.error('Error fetching labels', error);
    }
  },
};
