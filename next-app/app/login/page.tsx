import { getSession } from '../auth'
import { LoginForm } from '../ui/login-form'

export default async function LoginPage() {
  const session = await getSession()
  return (
    <main>
      <LoginForm />
      <pre>{JSON.stringify(session)}</pre>
    </main>
  )
}
