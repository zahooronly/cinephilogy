import { useEffect, useState } from "react";
import { AuthWrapper } from "../../components/layout/AuthWrapper";
import { Button } from "../../components/ui/Button";
import { useNavigate } from "react-router";
import { useAuth } from "../../lib/utils";
import { AuthAPI } from "../../services/api";
import OpenEyeIcon from "../../assets/svgs/open-eye.svg?react";
import CloseEyeIcon from "../../assets/svgs/close-eye.svg?react";
import { TOKEN } from "../../lib/constants";
import HeaderFooter from "../../components/layout/HeaderFooter";
import useAuthStore from "../../app/authStore";
import { useForm } from "react-hook-form";

const Login = () => {
  const { register, handleSubmit } = useForm();

  const navigate = useNavigate();
  const user = useAuth();
  const { addToken } = useAuthStore();

  useEffect(() => {
    if (user) navigate("/", { replace: true });
  }, [user, navigate]);

  const [showPassword, setShowPassword] = useState(false);

  const submitHandler = async (e) => {
    try {
      await AuthAPI.login(e);
      addToken(TOKEN);
      navigate("/");
    } catch (err) {
      console.error("Error:", err);
    }
  };

  const LOGIN_INPUT_FIELDS = [
    {
      label: "Email: ",
      type: "email",
      id: "email",
      name: "email",
      placeholder: "email@example.com",
    },
    {
      label: "Password: ",
      type: showPassword ? "text" : "password",
      id: "password",
      name: "password",
      placeholder: "••••••••",
    },
  ];
  return (
    <HeaderFooter>
      <main className="flex justify-center items-center h-screen">
        <AuthWrapper headerText="Login here!" className="m-4">
          <form
            onSubmit={handleSubmit(submitHandler)}
            className="flex flex-col w-full gap-2 max-w-sm"
          >
            {LOGIN_INPUT_FIELDS.map((input) => {
              return (
                <div key={input.id} className="relative space-y-1.5">
                  <label htmlFor={input.id} className="text-sm font-medium">
                    {input.label}
                  </label>
                  <input
                    type={input.type}
                    {...register(input.name)}
                    id={input.id}
                    className={`w-full p-2 border focus:outline-none focus:ring-1 focus:ring-black transition-all duration-200 `}
                    placeholder={input.placeholder}
                  />
                  {input.id == "password" && (
                    <button
                      type="button"
                      className="absolute cursor-pointer right-2 top-11 -translate-y-1/2"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <OpenEyeIcon /> : <CloseEyeIcon />}
                    </button>
                  )}
                </div>
              );
            })}
            <Button>Login</Button>
          </form>
        </AuthWrapper>
      </main>
    </HeaderFooter>
  );
};

export default Login;
