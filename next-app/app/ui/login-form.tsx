import { login } from '../auth'
import { redirect } from 'next/navigation'

export function LoginForm() {
  const authError = ''

  return (
    <form
      action={async (formData) => {
        'use server'
        await login(formData)
        // redirect('/')
      }}
    >
      {authError && <p>{authError}</p>}
      <div>
        <label htmlFor="name">Name</label>
        <input id="username" name="username" placeholder="Login" />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input id="password" name="password" type="password" />
      </div>
      <button type="submit">LOGIN</button>
    </form>
  )
}
