import { apiClientMultipart, setAuthToken } from './apiClient';

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
    setAuthToken(
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NzRhMTRlODYxYWJlNmM2ZmNlZmYxOWEiLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE3MzMxODU0MDYsImV4cCI6MTczMzE5MjYwNn0.mlSFu5fK0BH38PXCHSceBH0BD0WVU2uQnKXCbgB176E'
    );

    console.log('labelId', labelId);
    console.log('categoryId', categoryId);
    console.log('labelName', labelName);

    try {
      if (labelId) {
        const response = await apiClientMultipart.post('/contents', {
          file: file,
          contributorId: contributorId,
          labelId: labelId,
        });

        window.alert('Contenido subido correctamente');

        return response.data;
      } else {
        const response = await apiClientMultipart.post('/contents', {
          file: file,
          contributorId: contributorId,
          categoryId: categoryId,
          labelName: labelName,
        });

        window.alert('Contenido subido correctamente');

        return response.data;
      }
    } catch (error) {
      console.error('Error posting content', error);
    }
  },
};
