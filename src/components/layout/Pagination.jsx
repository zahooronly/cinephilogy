export const Pagination = ({ page, setPage }) => {
  return (
    <div className="flex gap-2 my-12 justify-center">
      <button
        onClick={() => setPage(page + 1)}
        className="cursor-pointer px-4 py-2 bg-white text-black rounded-md hover:bg-gray-200 transition-colors"
      >
        Load More
      </button>
    </div>
  );
};
