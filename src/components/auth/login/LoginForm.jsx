import { AuthWrapper } from "../AuthWrapper";

export const LoginForm = () => {
  return (
    <AuthWrapper headerText="Login here!" className="m-4">
      <form className="flex flex-col w-full gap-2 max-w-sm">
        <div className="space-y-1.5">
          <label className="text-sm font-medium" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="email@example.com"
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-black transition-all duration-200"
          />
        </div>
        <div className="space-y-1.5">
          <label className="text-sm font-medium" htmlFor="password">
            Password
          </label>
          <input
            type="password"
            id="password"
            placeholder="••••••••"
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-black transition-all duration-200"
          />
        </div>
        <button className="w-full p-2 mt-2 text-sm font-medium text-white bg-black rounded-md hover:bg-black/90 transition-all duration-200 cursor-pointer">
          Login
        </button>
      </form>
    </AuthWrapper>
  );
};
