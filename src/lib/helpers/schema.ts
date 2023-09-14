import { z } from "zod";

export const signInSchema = z.object({
  email: z.string().email(),
  password: z
    .string()
    .min(6, { message: "must contain at least 6 characters" })
    .max(32, { message: "entry is too long" }),
});
export type SignInValues = z.infer<typeof signInSchema>;

export const signUpSchema = z
  .object({
    name: z
      .string()
      .min(3, { message: "must contain at least 3 characters" })
      .max(32, { message: "maximum 32 characters allowed" }),
    email: z.string().email({ message: "please enter a valid email address." }),
    password: z
      .string()
      .min(6, { message: "must contain at least 6 characters" })
      .max(32, { message: "maximum 32 characters allowed" }),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "passwords don't match",
    path: ["confirmPassword"],
  });
export type SignUpValues = z.infer<typeof signUpSchema>;

const phoneRegex = new RegExp(
  "^[+]?[(]?[0-9]{3}[)]?[-s.]?[0-9]{3}[-s.]?[0-9]{4,6}$"
);
export const createOrderSchema = z.object({
  firstName: z
    .string()
    .min(1, { message: "please enter your name" })
    .min(3, { message: "entry is too short" })
    .max(32, { message: "entry is too long" }),
  lastName: z
    .string()
    .min(1, "this field is required")
    .min(3, { message: "entry is too short" })
    .max(32, { message: "entry is too long" }),
  deliveryAddress: z
    .string()
    .min(3, { message: "entry is too short" })
    .max(52, { message: "entry is too long" }),
  phone: z
    .string()
    .min(1, { message: "this field is required" })
    .regex(phoneRegex, "please enter a valid phone number"),
  email: z.string().email({ message: "please enter a valid email address." }),
});
export type createOrderValues = z.infer<typeof createOrderSchema>;

export const commentSchema = z.object({
  body: z
    .string()
    .min(10, { message: "entry is too short" })
    .max(280, { message: "entry is too long" }),
});
export type CommentsValues = z.infer<typeof commentSchema>;
