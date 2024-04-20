import Image from 'next/image'
import logo from '@/public/img/logo.png'
import styles from './Header.module.scss'
import Cart from '@/app/ui/Cart/Cart'
import Hero from './Hero/Hero'

export default function Header() {
  return (
    <>
      <nav className={styles.Nav}>
        <Image src={logo} width={98} height={28} alt="Dior logo" />
        <Cart />
      </nav>
      <Hero />
    </>
  )
}
