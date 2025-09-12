const TextField = ({ field, register }) => {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={field.id}>{field.label}</label>
      <input
        id={field.id}
        type={field.type}
        placeholder={field.placeholder}
        {...register(field.id, field.validation)}
        className={`w-full p-2 border focus:outline-none focus:ring-1 focus:ring-black transition-all duration-200 ${field.className}`}
      />
    </div>
  );
};

const RadioField = ({ field, register }) => {
  return (
    <div className="flex gap-2">
      <label className="font-medium">{field.label}</label>

      <div className="flex flex-col gap-2">
        {field.options.map((option) => (
          <label
            key={option.value}
            className="flex items-center gap-2 cursor-pointer"
          >
            <input
              type="radio"
              value={option.value}
              {...register(field.id, field.validation)}
              className={`w-4 h-4 ${field.className}`}
            />
            <span>{option.label}</span>
          </label>
        ))}
      </div>
    </div>
  );
};

const CheckboxField = ({ field, register }) => {
  return (
    <div className="flex items-center gap-2">
      <input
        id={field.id}
        type={field.type}
        {...register(field.id, field.validation)}
        className={`w-4 h-4 border focus:outline-none focus:ring-1 focus:ring-black transition-all duration-200 ${field.className}`}
      />
      <label htmlFor={field.id}>{field.label}</label>
    </div>
  );
};

export function InputField({ field, register }) {
  const fieldFactory = {
    name: TextField,
    email: TextField,
    password: TextField,
    radio: RadioField,
    checkbox: CheckboxField,
  };
  const props = {
    field,
    register,
  };
  const InputFieldComponent = fieldFactory[field.id];
  if (!InputFieldComponent) {
    return <p className="text-red-500">Unsupported field type: {field.type}</p>;
  }

  return <InputFieldComponent {...props} />;
}
