import React from "react";

export const Button = ({ children, onClick }) => {
  return (
    <button
      className="hover:bg-white hover:text-black border text-white hover:border hover:border-black border-transparent bg-black px-6 py-2 cursor-pointer uppercase font-thin transition-colors"
      onClick={onClick}
    >
      {children}
    </button>
  );
};
