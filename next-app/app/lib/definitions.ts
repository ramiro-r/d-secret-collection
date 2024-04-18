import { z } from 'zod'

export const LoginFormSchema = z.object({
  username: z.string().min(3, { message: `User name can't be empty` }).trim(),
  password: z.string().min(1, { message: `Password can't be empty` }).trim(),
})

export type FormState =
  | {
      errors?: {
        name?: string[]
        password?: string[]
      }
      message?: string
    }
  | undefined

export interface User {
  name: string
  password: string
}
