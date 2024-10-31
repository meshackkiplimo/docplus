import { z } from "zod";


 export const UserFormValidation = z.object({
    name: z.string()
     .min(2,"username must be at least 2 characters")
     .max(2,"username must be at least 2 characters"),
    email: z.string().email("invalid email"),
    phone:z.string().refine((phone) => /^\+?[1-9]\d{1,14}$/.test(phone) , 'invalid phone number'),

    password: z.string().min(8,"password must be at least 8 characters"),

     
  })