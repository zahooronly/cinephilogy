import { LoaderCircle } from "lucide-react";

export const Pagination = ({ title, isLoading, ...props }) => {
  return (
    <div className="flex gap-2 my-12 justify-center">
      <button
        className="cursor-pointer border border-black/20 px-4 py-2 bg-white text-black rounded-md hover:bg-gray-200 transition-colors disabled:bg-gray-200 disabled:cursor-not-allowed disabled:text-gray-600 flex flex-row gap-x-2 items-center justify-center"
        {...props}
      >
        {isLoading && (
          <LoaderCircle className="animate-spin rounded-full h-4 w-4 stroke-1 text-gray-600" />
        )}
        <span>{title}</span>
      </button>
    </div>
  );
};
