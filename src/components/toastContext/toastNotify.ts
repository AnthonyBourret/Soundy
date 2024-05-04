import toast from 'react-hot-toast';

const toastNotify = (type, message) => {
  const toastOptions = {
    icon: '👏',
    style: {
      background: '',
      color: '',
      className: 'animate-enter',
    },
  };

  switch (type) {
    case 'success':
      toastOptions.style.background = '#4BB543';
      toastOptions.icon = '✅';
      break;
    case 'error':
      toastOptions.style.background = '#FF6347';
      toastOptions.icon = '❌';
      toastOptions.style.color = '#fff';
      break;
    case 'warning':
      toastOptions.style.background = '#FFD700';
      toastOptions.icon = '⚠️';
      break;
    case 'info':
      toastOptions.style.background = '#1E90FF';
      toastOptions.icon = 'ℹ️';
      toastOptions.style.color = '#fff';
      break;
    default:
      break;
  }

  toast.success(message, toastOptions);
};

export default toastNotify;
