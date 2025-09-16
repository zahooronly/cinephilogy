import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";

const ErrorMessage = ({ message }) => (
  <p className="text-red-500 text-sm font-medium">{message}</p>
);

const TextField = ({ field, register, errorMessage }) => {
  const [showPassword, setShowPassword] = useState(false);
  if (field.id == "password") field.type = showPassword ? "text" : "password";

  const passwordHandler = () => setShowPassword(!showPassword);

  if (field.inputType == "number") field.type = "number";
  return (
    <div className="flex relative flex-col gap-2">
      <label htmlFor={field.id}>{field.label}</label>
      <input
        id={field.id}
        type={field.type}
        placeholder={field.placeholder}
        {...register(field.id)}
        className={`w-full p-2 border focus:outline-none focus:ring-1 focus:ring-black transition-all ${
          errorMessage ? "border-red-500 focus:ring-red-500" : "border-gray-300"
        } duration-200 ${field.className}`}
      />
      {field.id == "password" && (
        <span
          className="absolute cursor-pointer right-2 top-13 -translate-y-1/2"
          onClick={() => passwordHandler(field.id)}
        >
          {showPassword ? <Eye /> : <EyeOff />}
        </span>
      )}
      {errorMessage && <ErrorMessage message={errorMessage} />}
    </div>
  );
};

const RadioField = ({ field, register, errorMessage }) => {
  return (
    <div className="flex flex-col gap-2">
      <label className="font-medium">{field.label}</label>

      <div className="flex flex-col gap-2 w-full">
        {field.options.map((option) => (
          <label
            key={option.value}
            className="flex items-center gap-2 cursor-pointer"
          >
            <input
              type="radio"
              value={option.value}
              {...register(field.id)}
              className={`w-4 h-4 ${
                errorMessage
                  ? "border-red-500 focus:ring-red-500"
                  : "border-gray-300"
              }  ${field.className}`}
            />
            <span>{option.label}</span>
          </label>
        ))}
      </div>
      <div>{errorMessage && <ErrorMessage message={errorMessage} />}</div>
    </div>
  );
};

const CheckboxField = ({ field, register, errorMessage }) => {
  return (
    <div className="flex items-center gap-2">
      <input
        id={field.id}
        type="checkbox"
        {...register(field.id)}
        className={`w-4 h-4 ${
          errorMessage ? "border-red-500 focus:ring-red-500" : "border-gray-300"
        }  duration-200 ${field.className}`}
      />
      <label htmlFor={field.id}>{field.label}</label>
      {errorMessage && <ErrorMessage message={errorMessage} />}
    </div>
  );
};

export function InputField({ field, register, errorMessage }) {
  const fieldFactory = {
    text: TextField,
    number: TextField,
    radio: RadioField,
    checkbox: CheckboxField,
  };

  const InputFieldComponent = fieldFactory[field.inputType];
  if (!InputFieldComponent) {
    return <p className="text-red-500">Unsupported field type: {field.type}</p>;
  }

  return (
    <InputFieldComponent
      field={field}
      register={register}
      errorMessage={errorMessage}
    />
  );
}
