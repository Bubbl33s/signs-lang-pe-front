import { showToast } from './toastify';

export const onErrors = (errors: any) => {
  const firstErrorMessage = (Object.values(errors)[0] as { message: string })
    .message;

  showToast({
    text: firstErrorMessage,
    color: 'error',
  });
};
