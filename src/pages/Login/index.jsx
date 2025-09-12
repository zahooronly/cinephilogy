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
import { zodResolver } from "@hookform/resolvers/zod";
import { InputField } from "../../components/layout/InputField";
import { LOGIN_FIELDS_DATA } from "../../lib/constants/formConstants";
import { Eye, EyeOff } from "lucide-react";
import { parse } from "zod";

const Login = () => {
  const { register, handleSubmit } = useForm({
    resolver: zodResolver(LOGIN_FIELDS_DATA.schema),
  });
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();
  const user = useAuth();

  const addToken = useAuthStore((state) => state.addToken);

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
  const submitHandler = (loginPayload) => {
    console.log(loginPayload);
    const validation = parse(loginPayload);
    console.log(validation);
    if (validation.success) mutate(validation.data);
    mutate(loginPayload);
  };

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
            {LOGIN_FIELDS_DATA.inputFields.map((input) => {
              return (
                <div className="relative" key={input.id}>
                  <InputField
                    key={input.id}
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
