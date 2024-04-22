import Image from 'next/image'
import { LoginForm } from '@/app/ui/LoginForm/LoginForm'
import loginImage from '@/public/img/eiffel.png'
import logo from '@/public/img/logo.png'
import styles from './LoginPage.module.scss'
import AnimatedWrapper from '../ui/AnimatedWrapper/AnimatedWrapper'

export default function LoginPage() {
  return (
    <main className={styles.Main}>
      <AnimatedWrapper fromY={-50}>
        <Image
          className={styles.Main_logo}
          src={logo}
          width={153}
          height={43}
          alt="Dior logo"
        />
      </AnimatedWrapper>

      <AnimatedWrapper classNames={styles.Main_welcome} fromX={-50}>
        <section>
          <h2>BIENVENUE</h2>
          <h2>WELCOME</h2>
          <h2>いらっしゃいませ</h2>
        </section>
      </AnimatedWrapper>

      <AnimatedWrapper classNames={styles.Main_form} fromY={50}>
        <LoginForm />
      </AnimatedWrapper>

      <AnimatedWrapper classNames={styles.Main_imageContainer} fromX={50}>
        <Image
          src={loginImage}
          className={styles.Main_imageContainer_image}
          fill
          priority
          alt="Eiffel tower draw by hand picture"
        />
      </AnimatedWrapper>
    </main>
  )
}
