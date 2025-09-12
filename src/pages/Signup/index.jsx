import { useEffect } from "react";
import { AuthWrapper } from "../../components/layout/AuthWrapper";
import { Button } from "../../components/ui/Button";
import { useNavigate } from "react-router";
import HeaderFooter from "../../components/layout/HeaderFooter";
import useAuthStore from "../../app/authStore";
import { useForm } from "react-hook-form";
import { useAuth } from "../../hooks/useAuthHooks";
import { zodResolver } from "@hookform/resolvers/zod";
import { InputField } from "../../components/layout/InputField";
import { SIGNUP_FIELDS_DATA } from "../../lib/constants/formConstants";

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(SIGNUP_FIELDS_DATA.schema),
  });


  const originalToken = import.meta.env.VITE_ACCESS_TOKEN;

  const navigate = useNavigate();
  const user = useAuth();

  const removeToken = useAuthStore((state) => state.removeToken);
  useEffect(() => {
    if (user === originalToken) navigate("/", { replace: true });
    else removeToken();
  }, [user, navigate, originalToken, removeToken]);

  const submitHandler = (signupPayload) =>
    console.log("User Info: ", signupPayload);

  return (
    <HeaderFooter>
      <div className="flex justify-center items-center h-screen">
        <AuthWrapper headerText="Signup here!" className="m-4">
          <form
            onSubmit={handleSubmit(submitHandler)}
            className="flex flex-col w-full gap-2 max-w-sm"
          >
            {SIGNUP_FIELDS_DATA.inputFields.map((input) => {
              return (
                <InputField
                  key={input.id}
                  field={input}
                  register={register}
                  error={errors[input.id]}
                />
              );
            })}
            <Button>Signup</Button>
          </form>
        </AuthWrapper>
      </div>
    </HeaderFooter>
  );
};

export default Signup;
