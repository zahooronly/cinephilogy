import * as z from "zod";

export const LOGIN_FIELDS_DATA = {
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
  schema: z.object({
    email: z.email("Invalid email address"),
    password: z
      .string()
      .min(8, { message: "Password must be at least 8 characters long" }),
  }),
};
export const SIGNUP_FIELDS_DATA = {
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
      inputType: "number",
    },
    {
      id: "termsAndConditions ",
      label: "Accept all terms and conditions",
      inputType: "checkbox",
    },
  ],
  schema: z.object({
    name: z
      .string()
      .min(3, { message: "Name must be at least 3 characters long" }),
    email: z.email("Invalid email address"),
    password: z
      .string()
      .min(8, { message: "Password must be at least 8 characters long" }),
    gender: z.enum(["male", "female", "other", "prefer_not_to_say"], {
      message: "Please select your gender",
    }),
    age: z.number({ message: "Please enter your age" }),
    termsAndConditions: z.boolean(),
  }),
};
