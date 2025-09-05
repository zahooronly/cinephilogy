import { Link } from "react-router";
import { CallToActionButton } from "../ui/CallToActionButton";

export const CallToAction = () => {
  return (
    <div className="relative w-full h-[30vh] overflow-hidden">
      <div className="">
        <img
          src="https://static.hbo.com/2025-03/quilt-march2025-darker.jpg"
          alt="CTA Image"
          className="w-full h-full object-cover brightness-75"
        />
      </div>
      <div className="absolute text-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <h2 className="text-4xl text-white md:text-6xl font-extrabold uppercase tracking-tighter mb-2">
          CINE.
        </h2>
        <p className="text-white text-lg md:text-2xl font-light">
          Watch movies, series, and more.
        </p>
        <Link to="/login">
          <CallToActionButton>Get Started</CallToActionButton>
        </Link>
      </div>
    </div>
  );
};
