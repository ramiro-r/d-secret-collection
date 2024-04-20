import { z } from 'zod'

export const LoginFormSchema = z.object({
  name: z.string().min(1, { message: `User name can't be empty` }).trim(),
  password: z.string().min(1, { message: `Password can't be empty` }).trim(),
})
