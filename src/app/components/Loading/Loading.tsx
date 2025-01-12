import React from 'react';

interface LoadingProps {
  message?: string; // Optional loading message
}

const Loading: React.FC<LoadingProps> = ({ message = 'Loading...' }) => {
  return (
    <div className="flex items-center justify-center min-h-[100px]">
      <div className="animate-spin rounded-full h-10 w-10 border-t-4 border-blue-500 border-solid border-gray-200"></div>
      {message && <span className="ml-4 text-gray-600">{message}</span>}
    </div>
  );
};

export default Loading;
