import Image from 'next/image'
import { LoginForm } from '@/app/ui/LoginForm/LoginForm'
import loginImage from '@/public/img/eiffel.png'
import logo from '@/public/img/logo.png'
import styles from './LoginPage.module.scss'

export default function LoginPage() {
  return (
    <main className={styles.Main}>
      <Image
        className={styles.Main_logo}
        src={logo}
        width={153}
        height={43}
        alt="Dior logo"
      />
      <section className={styles.Main_welcome}>
        <p>BIENVENUE</p>
        <p>WELCOME</p>
        <p>いらっしゃいませ</p>
      </section>
      <LoginForm />
      <div className={styles.Main_imageContainer}>
        <Image
          src={loginImage}
          className={styles.Main_imageContainer_image}
          fill
          alt="Eiffel tower draw by hand picture"
        />
      </div>
    </main>
  )
}
