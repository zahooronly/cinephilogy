const TextField = ({ field, register, errors }) => {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={field.id}>{field.label}</label>
      <input
        name={field.name}
        id={field.id}
        type={field.type}
        placeholder={field.placeholder}
        {...register(field.id, field.validation)}
        className={`w-full p-2 border focus:outline-none focus:ring-1 focus:ring-black transition-all duration-200 ${field.className}`}
      />
      {errors[field.id] && (
        <p className="text-red-500 text-sm">{errors[field.id].message}</p>
      )}
    </div>
  );
};
const SelectField = ({ field, register, errors }) => {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={field.id}>{field.label}</label>
      <select
        name={field.name}
        id={field.id}
        {...register(field.id, field.validation)}
        className={`w-full p-2 border focus:outline-none focus:ring-1 focus:ring-black transition-all duration-200 ${field.className}`}
      >
        <option value="">Select {field.label}</option>
        {field.options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
      {errors[field.id] && (
        <p className="text-red-500 text-sm">{errors[field.id].message}</p>
      )}
    </div>
  );
};

const RadioField = ({ field, register, errors }) => {
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
              name={field.name}
              type="radio"
              value={option.value}
              {...register(field.id, field.validation)}
              className={`w-4 h-4 ${field.className}`}
            />
            <span>{option.label}</span>
          </label>
        ))}
      </div>

      {errors[field.id] && (
        <p className="text-red-500 text-sm">{errors[field.id].message}</p>
      )}
    </div>
  );
};

const CheckboxField = ({ field, register, errors }) => {
  return (
    <div className="flex items-center gap-2">
      <input
        id={field.id}
        name={field.name}
        type={field.type}
        {...register(field.id, field.validation)}
        className={`w-4 h-4 border focus:outline-none focus:ring-1 focus:ring-black transition-all duration-200 ${field.className}`}
      />
      <label htmlFor={field.id}>{field.label}</label>
      {errors[field.id] && (
        <p className="text-red-500 text-sm">{errors[field.id].message}</p>
      )}
    </div>
  );
};

export default function InputFieldFactory({ field, register, errors }) {
  switch (field.type) {
    case "text":
    case "email":
    case "password":
      return <TextField field={field} register={register} errors={errors} />;
    case "select":
      return <SelectField field={field} register={register} errors={errors} />;
    case "radio":
      return <RadioField field={field} register={register} errors={errors} />;
    case "checkbox":
      return (
        <CheckboxField field={field} register={register} errors={errors} />
      );
    default:
      return (
        <p className="text-red-500">Unsupported field type: {field.type}</p>
      );
  }
}
