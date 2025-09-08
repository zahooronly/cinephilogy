import React from "react";

export const Button = ({ children, onClick, ...props }) => {
  return (
    <button
      className="hover:bg-white hover:text-black border text-white hover:border hover:border-black border-black bg-black px-6 py-2 cursor-pointer uppercase font-thin transition-colors"
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};
