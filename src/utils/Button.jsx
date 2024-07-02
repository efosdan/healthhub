import React from 'react';

const Button = ({ text, className, ...props }) => {
  return (
    <div
      {...props}
      className={`px-5 py-1.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 hover:cursor-pointer transition duration-200 ${className}`}
    >
      {text}
    </div>
  );
};

export default Button;
