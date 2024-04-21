import Image from 'next/image'
import styles from './Hero.module.scss'
import keyIcon from '@/public/img/icons/key.svg'

export default function Hero() {
  return (
    <div className={styles.Container}>
      <div className={styles.Container_image}>
        <Image src={keyIcon} fill alt="Dior secret collection key" />
      </div>
      <h1>The secret collection</h1>
    </div>
  )
}
