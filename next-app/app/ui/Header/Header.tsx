import Image from 'next/image'
import logo from '@/public/img/logo.png'
import styles from './Header.module.scss'
import Cart from '@/app/ui/Cart/Cart'
import Hero from './Hero/Hero'

export default function Header() {
  return (
    <>
      <nav className={styles.Nav}>
        <div className={styles.Nav_image}>
          <Image src={logo} fill alt="Dior logo" />
        </div>
        <Cart />
      </nav>
      <Hero />
    </>
  )
}
