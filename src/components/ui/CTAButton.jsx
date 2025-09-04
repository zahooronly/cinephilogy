import React from "react";

export const CTAButton = ({ children, onClick }) => {
  return (
    <button
      className="hover:bg-black hover:text-white border text-black hover:border hover:border-black border-white bg-white px-6 py-2 cursor-pointer uppercase font-thin transition-colors"
      onClick={onClick}
    >
      {children}
    </button>
  );
};
