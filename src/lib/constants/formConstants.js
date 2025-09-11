import * as z from "zod";

export const LOGIN_INPUT_FIELDS = [
  {
    id: "email",
    label: "Email: ",
    type: "email",
    name: "email",
    placeholder: "email@example.com",
    validation: z.object(z.string().min(6, "Email is required!")),
  },
  {
    id: "password",
    label: "Password: ",
    type: "password",
    name: "password",
    placeholder: "••••••••",
    validation: z.object(z.string().min(8, "Password must be 8 characters!")),
  },
];
