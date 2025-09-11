import { useEffect, useState } from "react";
import { AuthWrapper } from "../../components/layout/AuthWrapper";
import { Button } from "../../components/ui/Button";
import { useNavigate } from "react-router";
import { AuthAPI } from "../../services/api";
import { TOKEN } from "../../lib/constants";
import HeaderFooter from "../../components/layout/HeaderFooter";
import useAuthStore from "../../app/authStore";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { useAuth } from "../../hooks/useAuthHooks";
import { errorMessage } from "../../lib/utils";
import toast from "react-hot-toast";
import InputFieldFactory from "../../components/layout/InputFieldFactory";
import { LOGIN_INPUT_FIELDS } from "../../lib/constants/formConstants";
import { Eye, EyeOff } from "lucide-react";

const Login = () => {
  const { register, handleSubmit } = useForm();
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();
  const user = useAuth();

  const { addToken } = useAuthStore();

  useEffect(() => {
    if (user) navigate("/", { replace: true });
  }, [user, navigate]);

  const { mutate, isPending } = useMutation({
    mutationFn: async (payload) => await AuthAPI.login(payload),
    onSuccess: () => {
      addToken(TOKEN);
      navigate("/");
      toast.success("Login successful.");
    },
    onError: (err) => errorMessage(err),
  });
  const submitHandler = (loginPayload) => mutate(loginPayload);

  const passwordHandler = (input) => {
    input.type = showPassword ? "text" : "password";
    setShowPassword(!showPassword);
  };

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
                <div className="relative">
                  <InputFieldFactory
                    key={input.id}
                    errors={input.validation}
                    field={input}
                    register={register}
                  />
                  {input.id == "password" && (
                    <span
                      className="absolute cursor-pointer right-2 top-13 -translate-y-1/2"
                      onClick={() => passwordHandler(input)}
                    >
                      {showPassword ? <Eye /> : <EyeOff />}
                    </span>
                  )}
                </div>
              );
            })}
            <Button isLoading={isPending}>Login</Button>
          </form>
        </AuthWrapper>
      </main>
    </HeaderFooter>
  );
};

export default Login;
