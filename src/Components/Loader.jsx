// PulsingLoader.jsx
import React from 'react';

const Loader = () => {
  return (
    <div className="flex justify-center items-center h-screen space-x-2">
      <div className="w-8 h-8 bg-blue-500 rounded-full animate-pulse"></div>
      <div className="w-8 h-8 bg-blue-500 rounded-full animate-pulse delay-150"></div>
      <div className="w-8 h-8 bg-blue-500 rounded-full animate-pulse delay-300"></div>
    </div>
  );
};

export default Loader;
