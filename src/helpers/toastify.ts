import Toastify from 'toastify-js';

type ShowToastProps = {
  text: string;
  color: 'success' | 'error' | 'warning' | 'info';
};

export const showToast = ({ text, color }: ShowToastProps) => {
  Toastify({
    text,
    duration: 3000,
    destination: 'https://github.com/apvarun/toastify-js',
    newWindow: true,
    close: true,
    gravity: 'bottom',
    position: 'right',
    stopOnFocus: true,
    style: {
      background: ToastColors[color],
    },
    onClick: function () {},
  }).showToast();
};

const ToastColors = {
  success: 'linear-gradient(to right, #22c55e, #15803d)',
  error: 'linear-gradient(to right, #FB7185, #BE123C)',
  warning: 'linear-gradient(to right, #A3A3A3, #404040)',
  info: 'linear-gradient(to right, #C084FC, #7E22CE)',
};
