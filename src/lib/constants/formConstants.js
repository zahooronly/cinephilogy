import { loginSchema, signupSchema } from "../../schemas";

export const LOGIN_FIELDS_DATA = {
  schema: loginSchema,
  inputFields: [
    {
      id: "email",
      label: "Email: ",
      placeholder: "email@example.com",
      inputType: "text",
    },
    {
      id: "password",
      label: "Password: ",
      placeholder: "••••••••",
      inputType: "text",
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
      inputType: "text",
    },
    {
      id: "email",
      label: "Email: ",
      placeholder: "email@example.com",
      inputType: "text",
    },
    {
      id: "password",
      label: "Password: ",
      placeholder: "••••••••",
      inputType: "text",
    },
    {
      id: "gender",
      label: "Gender: ",
      placeholder: "Select your gender",
      inputType: "radio",
      options: [
        {
          label: "Male ",
          value: "male",
        },
        {
          label: "Female ",
          value: "female",
        },
        {
          label: "Other ",
          value: "other",
        },
        {
          label: "Prefer not to say ",
          value: "prefer_not_to_say",
        },
      ],
    },
    {
      id: "age",
      label: "Age: ",
      placeholder: "25",
      inputType: "text",
    },
    {
      id: "tnc",
      label: "Accept all terms and conditions",
      inputType: "checkbox",
    },
  ],
};
