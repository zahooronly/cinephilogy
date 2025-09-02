import { useState } from "react";
import { AuthWrapper } from "../components/auth/AuthWrapper";

const authApiUrl = await import.meta.env.VITE_AUTH_API_URL;

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const loginHandler = (e) => {
    e.preventDefault();
    console.log(formData);
    try {
      fetch(authApiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Error");
          }
          return response.json();
        })
        .then((data) => {
          console.log("Success:", data);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    } catch (err) {
      console.error("Error:", err);
    }
  };

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
                {showPassword ? "👁️" : "👁️‍🗨️"}
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
