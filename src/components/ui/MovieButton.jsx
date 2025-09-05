export const MovieButton = ({ children, className }) => {
  return (
    <button
      className={`flex items-center space-x-3 backdrop-blur-sm border px-6 py-4 rounded-xl font-semibold transition-all duration-300 cursor-pointer ${className}`}
    >
      {children}
    </button>
  );
};
