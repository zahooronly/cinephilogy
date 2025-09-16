import { LoaderCircle } from "lucide-react";
import React from "react";

export const Button = ({ children, isLoading, onClick, ...props }) => {
  return (
    <button
      className="hover:bg-white hover:text-black border text-white hover:border hover:border-black border-black bg-black px-6 py-2 cursor-pointer uppercase font-thin transition-colors disabled:bg-gray-200 disabled:cursor-not-allowed disabled:text-gray-600 flex flex-row gap-x-2 items-center justify-center"
      onClick={onClick}
      {...props}
      disabled={isLoading}
    >
      {isLoading && (
        <LoaderCircle className="animate-spin rounded-full h-4 w-4 stroke-1 text-gray-600" />
      )}
      {children}
    </button>
  );
};
