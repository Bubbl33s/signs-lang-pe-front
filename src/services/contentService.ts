import { apiClient, apiClientMultipart } from './apiClient';

type PostContent = {
  file: File | null;
  contributorId: string;
  categoryId?: string;
  labelName?: string;
  labelId?: string;
};

export const ContentService = {
  async postContent({
    file,
    contributorId,
    labelId,
    categoryId,
    labelName,
  }: PostContent) {
    try {
      if (labelId) {
        const response = await apiClientMultipart.post('/contents', {
          file: file,
          contributorId: contributorId,
          labelId: labelId,
        });

        return response;
      } else {
        const response = await apiClientMultipart.post('/contents', {
          file: file,
          contributorId: contributorId,
          categoryId: categoryId,
          labelName: labelName,
        });

        return response;
      }
    } catch (error) {
      console.error('Error posting content', error);
    }
  },

  async getUnverifiedContentsByLabelId(labelId: string) {
    try {
      const response = await apiClient.get(
        `/contents/label/${labelId}/unverified`
      );

      return response.data;
    } catch (error) {
      console.error('Error fetching contents', error);
    }
  },

  async verifyContent(contentId: string) {
    try {
      const response = await apiClient.patch(`/contents/${contentId}/verify`);

      return response;
    } catch (error) {
      console.error('Error verifying content', error);
    }
  },

  async deleteContent(contentId: string) {
    try {
      const response = await apiClient.delete(`/contents/${contentId}`);

      return response;
    } catch (error) {
      console.error('Error deleting content', error);
    }
  },
};
