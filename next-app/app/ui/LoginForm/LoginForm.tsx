'use client'
import { useRef, useState } from 'react'
import authenticate from '@/app/lib/auth/actions'
import { redirect } from 'next/navigation'
import styles from './LoginForm.module.scss'
import cn from 'classnames'

export function LoginForm() {
  const [hasError, setHasError] = useState(false)
  const loginForm = useRef<HTMLFormElement>(null)

  const inputClassName = cn(styles.Form_input, {
    [styles.Form_input__error]: hasError,
  })

  const errorMsgClass = cn(styles.Form_error, {
    [styles.Form_error__active]: hasError,
  })

  const formAction = async (formData: FormData) => {
    const result = await authenticate(formData)

    if (!result) {
      redirect('/collection')
    }

    loginForm.current?.reset()
    setHasError(true)
  }

  const handleInputFocus = () => setHasError(false)

  return (
    <form className={styles.Form} ref={loginForm} action={formAction}>
      <p className={errorMsgClass}>Your login or password are incorrect</p>
      <div className={styles.Form_field}>
        <label className="sr-only" htmlFor="username">
          Name
        </label>
        <input
          className={inputClassName}
          id="username"
          name="username"
          placeholder="LOGIN"
          onFocus={handleInputFocus}
        />
      </div>
      <div className={styles.Form_field}>
        <label className="sr-only" htmlFor="password">
          Password
        </label>
        <input
          className={inputClassName}
          id="password"
          name="password"
          type="password"
          placeholder="PASSWORD"
          onFocus={handleInputFocus}
        />
      </div>
      <button className={`${styles.Button}`} type="submit">
        LOGIN
      </button>
    </form>
  )
}
