import { AuthWrapper } from "../../components/layout/AuthWrapper";
import { Button } from "../../components/ui/Button";
import HeaderFooter from "../../components/layout/HeaderFooter";
import { useForm } from "react-hook-form";
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
