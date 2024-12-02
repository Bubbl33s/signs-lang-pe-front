import { useContext } from 'react';
import { SignsContext } from '../context/SignsContext';

const useSigns = () => {
  const context = useContext(SignsContext);

  if (!context) {
    throw new Error('useSigns must be used within a SignsProvider');
  }

  return context;
};

export default useSigns;
