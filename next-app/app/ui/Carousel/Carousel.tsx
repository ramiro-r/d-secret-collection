'use client'
import Image from 'next/image'
import styles from './Carousel.module.scss'
import nextIcon from '@/public/img/icons/right-arrow-icon.svg'
import prevIcon from '@/public/img/icons/left-arrow-icon.svg'

interface CarouselProps {
  children: React.ReactNode
}

export default function Carousel({ children }: CarouselProps) {
  return (
    <div className={styles.Container}>
      <div className={styles.Container_slides}>{children}</div>
      <div className={styles.Container_actions}>
        <button>
          <Image src={prevIcon} alt="prev item icon" />
        </button>
        <button>
          <Image src={nextIcon} alt="next item icon" />
        </button>
      </div>
    </div>
  )
}
