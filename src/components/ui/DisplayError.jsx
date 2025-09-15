import { Button } from "./Button";
import { Link } from "react-router";

export const DisplayError = ({ errorMessage, cause }) => {
  return (
    <div className="h-screen w-full flex flex-col gap-5 justify-center items-center">
      <p className="italic text-red-500">{errorMessage}</p>
      {cause && (
        <p>
          Reason behind this error:{" "}
          <span className="italic text-red-500">{cause}</span>
        </p>
      )}
      <Link to="/">
        <Button>Go home</Button>
      </Link>
    </div>
  );
};
