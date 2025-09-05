import { Link } from "react-router";
import { Button } from "../../components/ui/Button";

const NotFound = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="text-center">
        <h1 className="text-4xl font-extrabold">404 - Not Found</h1>
        <p className="mt-4 text-lg">
          The page you are looking for does not exist.
        </p>
        <Link to="/" className="mt-6 inline-block">
          <Button>Go to Home</Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
