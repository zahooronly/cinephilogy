import { LoaderCircle } from "lucide-react";

export const Loader = () => {
  return (
    <div className="min-h-screen bg-white flex-col flex items-center justify-center">
      <LoaderCircle className="animate-spin rounded-full" />
    </div>
  );
};
