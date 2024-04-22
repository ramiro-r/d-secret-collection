import { Product } from '@/app/lib/types/interfaces'
import styles from './ProductCard.module.scss'
import Image from 'next/image'
import { motion } from 'framer-motion'
import cn from 'classnames'
import { useMediaQuery } from '@react-hook/media-query'

interface CardProps {
  product: Product
  isActive: boolean
}

export default function ProductCard({ product, isActive }: CardProps) {
  const isMobileOrTablet = useMediaQuery('screen and (max-width: 1024px)')
  const shouldAnimate = isActive || isMobileOrTablet
  const imageClass = cn({
    [styles.Card_imageContainer__gray]: !isActive && !isMobileOrTablet,
  })

  return (
    <motion.div
      className={styles.Card}
      initial={false}
      animate={{
        scale: shouldAnimate ? 1 : 0.65,
        opacity: shouldAnimate ? 1 : 0.1,
        transformOrigin: 'bottom center',
      }}
      transition={{
        ease: 'easeOut',
        duration: 0.5,
      }}
    >
      <div className={styles.Card_imageContainer}>
        <Image
          className={imageClass}
          src={product.media.src}
          fill
          alt={product.media.alt}
        />
      </div>
      <div className={styles.Card_content}>
        <motion.p
          initial={false}
          animate={{ opacity: shouldAnimate ? 1 : 0 }}
          className={styles.Card_content__description}
        >
          {product.description}
        </motion.p>
        <h3 className={styles.Card_content__name}>{product.name}</h3>
        <p className={styles.Card_content__price}>{product.formattedPrice}</p>
      </div>
    </motion.div>
  )
}
