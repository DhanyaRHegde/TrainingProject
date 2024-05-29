import { z } from 'zod';

export const schemaLogin = z.object({
  email: z.string().email(),
  password: z.string().regex(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[^\w\d\s])(?!.*\s).{8,}$/)
});

export type FormFieldsLogin = z.infer<typeof schemaLogin>;


export const schemaSignup = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters long"),
  lastName: z.string().min(2, "Last name must be at least 2 characters long"),
  email: z.string().email("Please enter a valid email address"),
  password: z.string().regex(
    /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[^\w\d\s])(?!.*\s).{8,}$/)
});

export type FormFieldsSignup = z.infer<typeof schemaSignup>;




