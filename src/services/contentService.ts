import { apiClientMultipart } from './apiClient';

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
};
