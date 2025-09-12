import { loginSchema, signupSchema } from "../../schemas";

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
export const SIGNUP_FIELDS_DATA = {
  schema: signupSchema,
  inputFields: [
    {
      id: "name",
      label: "Name: ",
      placeholder: "John Doe",
    },
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
    {
      id: "gender",
      label: "Gender: ",
      placeholder: "Select your gender",
    },
    {
      id: "age",
      label: "Age: ",
      placeholder: "25",
    },
    {
      id: "interestedFields",
      label: "Interested Fields: ",
      placeholder: "Select your interested fields",
    },
  ],
};
