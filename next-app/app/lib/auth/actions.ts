'use server'
import { LoginFormSchema } from '~~/lib/auth/zod'
import { login } from '~~/lib/auth'

const authenticate = async (formData: FormData) => {
  try {
    const rawUserData = {
      name: formData.get('username') as string,
      password: formData.get('password') as string,
    }

    const validatedData = LoginFormSchema.safeParse(rawUserData)

    if (!validatedData.success) {
      return {
        message: 'Schema validation failed',
      }
    }

    await login(rawUserData)
  } catch (err) {
    if (err instanceof Error) {
      return {
        message: err.message,
      }
    }
  }
}
export default authenticate
