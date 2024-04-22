import { Product } from '@/app/lib/types/interfaces'
import styles from './ProductCard.module.scss'
import Image from 'next/image'
import { AnimatePresence, motion, useAnimate } from 'framer-motion'
import cn from 'classnames'
import { useMediaQuery } from '@react-hook/media-query'
import { useEffect, useState } from 'react'
import AnimatedWrapper from '../AnimatedWrapper/AnimatedWrapper'

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
  const scaleValue = 0.65

  return (
    <motion.div
      className={styles.Card}
      initial={{ scale: shouldAnimate ? 1 : scaleValue, opacity: 0 }}
      animate={{
        scale: shouldAnimate ? 1 : scaleValue,
        opacity: shouldAnimate ? 1 : 0.1,
        transformOrigin: 'bottom center',
      }}
      transition={{
        ease: 'easeOut',
        duration: 0.5,
      }}
    >
      <AnimatedWrapper classNames={styles.Card_imageContainer} fromX={-50}>
        <Image
          className={imageClass}
          src={product.media.src}
          fill
          alt={product.media.alt}
        />
      </AnimatedWrapper>

      <div className={styles.Card_content}>
        <motion.p
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            ease: 'easeInOut',
            duration: 1,
          }}
          className={styles.Card_content__description}
        >
          {product.description}
        </motion.p>
        <AnimatedWrapper fromX={-100}>
          <h3 className={styles.Card_content__name}>{product.name}</h3>
          <p className={styles.Card_content__price}>{product.formattedPrice}</p>
        </AnimatedWrapper>
      </div>
    </motion.div>
  )
}
