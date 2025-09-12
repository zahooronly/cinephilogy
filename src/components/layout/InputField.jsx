import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";

const TextField = ({ field, register, error }) => {
  const [showPassword, setShowPassword] = useState(false);
  if (field.id == "password") {
    field.type = showPassword ? "text" : "password";
  }
  const passwordHandler = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div className="flex relative flex-col gap-2">
      <label htmlFor={field.id}>{field.label}</label>
      <input
        id={field.id}
        type={field.type}
        placeholder={field.placeholder}
        {...register(field.id)}
        className={`w-full p-2 border focus:outline-none focus:ring-1 focus:ring-black transition-all ${
          error ? "border-red-500 focus:ring-red-500" : "border-gray-300"
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
      {error && (
        <p className="text-red-500 text-sm font-medium">{error.message}</p>
      )}
    </div>
  );
};

const RadioField = ({ field, register, error }) => {
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
                error ? "border-red-500 focus:ring-red-500" : "border-gray-300"
              }  ${field.className}`}
            />
            <span>{option.label}</span>
          </label>
        ))}
      </div>
      <div>
        {error && (
          <p className="text-red-500 text-sm font-medium">{error.message}</p>
        )}
      </div>
    </div>
  );
};

const CheckboxField = ({ field, register, error }) => {
  return (
    <div className="flex items-center gap-2">
      <input
        id={field.id}
        type="checkbox"
        {...register(field.id)}
        className={`w-4 h-4 border focus:outline-none focus:ring-1 focus:ring-black transition-all ${
          error ? "border-red-500 focus:ring-red-500" : "border-gray-300"
        }  duration-200 ${field.className}`}
      />
      <label htmlFor={field.id}>{field.label}</label>
      {error && (
        <p className="text-red-500 text-sm font-medium">{error.message}</p>
      )}
    </div>
  );
};

export function InputField({ field, register, error }) {
  const fieldFactory = {
    text: TextField,
    radio: RadioField,
    checkbox: CheckboxField,
  };
  const props = {
    field,
    register,
    error,
  };

  const InputFieldComponent = fieldFactory[field.inputType];
  if (!InputFieldComponent) {
    return <p className="text-red-500">Unsupported field type: {field.type}</p>;
  }

  return <InputFieldComponent {...props} />;
}
