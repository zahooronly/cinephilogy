import * as z from "zod";
const passwordSchema = z
  .string()
  .min(8, { message: "Password must be at least 8 characters long" });

const emailSchema = z.string().email("Invalid email address");

export const loginSchema = z.object({
  email: emailSchema,
  password: passwordSchema,
});
export const signupSchema = z.object({
  name: z
    .string()
    .min(3, { message: "Name must be at least 3 characters long" }),
  email: emailSchema,
  password: passwordSchema,
  gender: z.enum(["male", "female", "other", "prefer_not_to_say"], {
    message: "Please select your gender",
  }),
  age: z.string().min(1, { message: "Please enter a your age" }),
  TnC: z.boolean({
    message: "You must accept the Terms and Conditions",
  }),
});
