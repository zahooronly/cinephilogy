import { DisplayError } from "../ui/DisplayError";
import { Loader } from "../ui/Loader";
import HeaderFooter from "./HeaderFooter";

export const SafeRender = ({ error, isLoading, children }) => {
  if (error) {
    return (
      <HeaderFooter>
        <DisplayError errorMessage={error.message} cause={error?.cause} />
      </HeaderFooter>
    );
  }

  if (isLoading) {
    return (
      <HeaderFooter>
        <Loader />
      </HeaderFooter>
    );
  }
  return <HeaderFooter>{children}</HeaderFooter>;
};
