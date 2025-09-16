import { DisplayError } from "../ui/DisplayError";
import { Loader } from "../ui/Loader";
import HeaderFooter from "./HeaderFooter";
import { Search } from "./Search";

export const SafeRender = ({
  error,
  isLoading,
  children,
  handleSearch,
  search,
}) => {
  return (
    <HeaderFooter>
      <div className="my-[74px] px-4 sm:px-6 md:px-8">
        <Search handleSearch={handleSearch} search={search} />
      </div>

      {error ? (
        <DisplayError errorMessage={error.message} cause={error?.cause} />
      ) : isLoading ? (
        <Loader />
      ) : (
        children
      )}
    </HeaderFooter>
  );
};
