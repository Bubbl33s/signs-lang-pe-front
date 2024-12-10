import { apiClient } from './apiClient';

export const LabelService = {
  async getSigns() {
    try {
      const response = await apiClient.get('/labels/content/count');

      return response.data;
    } catch (error) {
      console.error('Error fetching labels', error);
    }
  },

  async getLabel(id: string) {
    try {
      const response = await apiClient.get(`/labels/${id}`);

      return response.data;
    } catch (error) {
      console.error('Error fetching label', error);
    }
  },
};
