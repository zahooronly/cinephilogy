import * as z from "zod";
const passwordSchema = z
  .string()
  .min(8, { message: "Password must be at least 8 characters long" })
  .regex(/[A-Z]/, {
    message: "Password must contain at least one uppercase letter",
  })
  .regex(/[a-z]/, {
    message: "Password must contain at least one lowercase letter",
  })
  .regex(/[0-9]/, { message: "Password must contain at least one number" })
  .regex(/[^A-Za-z0-9]/, {
    message: "Password must contain at least one special character",
  });

const emailSchema = z.string().email("Invalid email address");

export const loginSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: passwordSchema,
});

export const signupSchema = z.object({
  name: z
    .string()
    .min(3, { message: "Name must be at least 3 characters long" }),
  email: emailSchema,
  password: passwordSchema,
  gender: z
    .enum(["male", "female", "other", "prefer_not_to_say"], {
      required_error: "Please select a gender",
      invalid_type_error: "Please select a valid gender option",
    })
    .default("prefer_not_to_say"),

  age: z
    .number()
    .int("Age must be a whole number")
    .min(18, "You must be at least 18 years old")
    .max(120, "Please enter a valid age")
    .default(18),

  interestedFields: z
    .array(
      z.enum(
        [
          "action",
          "comedy",
          "drama",
          "horror",
          "romance",
          "thriller",
          "documentary",
          "animation",
        ],
        {
          required_error: "Please select a valid genre",
          invalid_type_error: "Invalid genre selection",
        }
      )
    )
    .min(1, "Please select at least one field of interest")
    .max(5, "You can select up to 5 fields of interest")
    .default([]),
});
