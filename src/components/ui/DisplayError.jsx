import { ROUTE_PATHS } from "../../lib/constants/routesConstants";
import { Button } from "./Button";
import { Link } from "react-router";

export const DisplayError = ({ errorMessage }) => {
  return (
    <div className="h-screen w-full flex flex-col gap-5 justify-center items-center">
      <p className="italic text-red-500">{errorMessage}</p>
      <Link to={ROUTE_PATHS.HOME}>
        <Button>Go home</Button>
      </Link>
    </div>
  );
};
