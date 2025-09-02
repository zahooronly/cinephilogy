import { AuthWrapper } from "../components/auth/AuthWrapper";
import { useLogin } from "../hooks/useLogin";

const LoginPage = () => {
  const { formData, setFormData, showPassword, setShowPassword, loginHandler } =
    useLogin();
  return (
    <main className="flex justify-center items-center h-screen">
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
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
          </div>
          <div className="space-y-1.5">
            <label className="text-sm font-medium" htmlFor="password">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                placeholder="••••••••"
                className="w-full p-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-black transition-all duration-200"
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
              />
              <button
                type="button"
                className="absolute right-2 top-1/2 -translate-y-1/2"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" />
                    <line x1="1" y1="1" x2="23" y2="23" />
                  </svg>
                )}
              </button>
            </div>
          </div>
          <button
            className="w-full p-2 mt-2 text-sm font-medium text-white bg-black rounded-md hover:bg-black/90 transition-all duration-200 cursor-pointer"
            onClick={loginHandler}
          >
            Login
          </button>
        </form>
      </AuthWrapper>
    </main>
  );
};

export default LoginPage;
