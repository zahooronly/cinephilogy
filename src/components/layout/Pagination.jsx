export const Pagination = ({ title, ...props }) => {
  return (
    <div className="flex gap-2 my-12 justify-center">
      <button
        className="cursor-pointer border border-black/20 px-4 py-2 bg-white text-black rounded-md hover:bg-gray-200 transition-colors disabled:bg-gray-200 disabled:cursor-not-allowed disabled:text-gray-600"
        {...props}
      >
        {title}
      </button>
    </div>
  );
};
