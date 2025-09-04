import { useEffect, useState } from "react";
import { AuthWrapper } from "../../components/layout/AuthWrapper";
import { Button } from "../../components/ui/Button";
import { useNavigate } from "react-router";
import { getUser } from "../../lib/utils/getUser";
import { AuthAPI } from "../../services/api";
import OpenEyeIcon from "../../assets/svgs/open-eye.svg?react";
import CloseEyeIcon from "../../assets/svgs/close-eye.svg?react";

const Login = () => {
  const navigate = useNavigate();
  const user = getUser();

  useEffect(() => {
    if (user) navigate("/", { replace: true });
  }, [user, navigate]);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const loginHandler = (e) => {
    e.preventDefault();
    try {
      AuthAPI.login(formData).then((response) => {
        localStorage.setItem("token", response.data.access);
        navigate("/");
      });
      setFormData({
        email: "",
        password: "",
      });
    } catch (err) {
      console.error("Error:", err);
    }
  };

  const handlePasswordChange = (e) =>
    setFormData({ ...formData, password: e.target.value });
  const handleEmailChange = (e) =>
    setFormData({ ...formData, email: e.target.value });

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
              className="w-full p-2 border focus:outline-none focus:ring-1 focus:ring-black transition-all duration-200"
              onChange={handleEmailChange}
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
                className="w-full p-2 border focus:outline-none focus:ring-1 focus:ring-black transition-all duration-200"
                onChange={handlePasswordChange}
              />
              <button
                type="button"
                className="absolute cursor-pointer right-2 top-1/2 -translate-y-1/2"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <OpenEyeIcon /> : <CloseEyeIcon />}
              </button>
            </div>
          </div>
          <Button onClick={loginHandler}>Login</Button>
        </form>
      </AuthWrapper>
    </main>
  );
};

export default Login;
