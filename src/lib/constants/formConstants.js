import { loginSchema } from "../../schemas";

export const LOGIN_FIELDS_DATA = {
  schema: loginSchema,
  inputFields: [
    {
      id: "email",
      label: "Email: ",
      placeholder: "email@example.com",
    },
    {
      id: "password",
      label: "Password: ",
      placeholder: "••••••••",
    },
  ],
};

export const LOGIN_INPUT_FIELDS = [
  {
    id: "email",
    label: "Email: ",
    placeholder: "email@example.com",
  },
  {
    id: "password",
    label: "Password: ",
    placeholder: "••••••••",
  },
];
