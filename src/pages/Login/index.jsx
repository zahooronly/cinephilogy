import { AuthWrapper } from "../../components/layout/AuthWrapper";
import { Button } from "../../components/ui/Button";
import { AuthAPI } from "../../services/api";
import { TOKEN } from "../../lib/constants";
import HeaderFooter from "../../components/layout/HeaderFooter";
import useAuthStore from "../../app/authStore";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { errorMessage } from "../../lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { InputField } from "../../components/layout/InputField";
import { LOGIN_FIELDS_DATA } from "../../lib/constants/formConstants";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(LOGIN_FIELDS_DATA.schema),
  });
  const setToken = useAuthStore((state) => state.setToken);

  const { mutate, isPending } = useMutation({
    mutationFn: async (payload) => await AuthAPI.login(payload),
    onSuccess: () => {
      setToken(TOKEN);
    },
    onError: (err) => errorMessage(err),
  });
  const submitHandler = (loginPayload) => mutate(loginPayload);

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
                <InputField
                  key={input.id}
                  field={input}
                  register={register}
                  errorMessage={errors[input.id]?.message}
                />
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
