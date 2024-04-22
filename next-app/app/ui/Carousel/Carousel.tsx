'use client'
import styles from './Carousel.module.scss'
import { useEffect, useMemo, useState } from 'react'
import { motion, AnimatePresence, useAnimate } from 'framer-motion'
import { Product } from '@/app/lib/types/interfaces'
import ProductCard from '../ProductCard/ProductCard'
import { useMediaQuery } from '@react-hook/media-query'
import CarouselPaginationButton from './CarouselPaginationButton/CarouselPaginationButton'

interface CarouselProps {
  products: Product[]
}

export default function Carousel({ products }: CarouselProps) {
  const isMobileOrTablet = useMediaQuery('screen and (max-width: 1024px)')
  const [activeIndex, setActiveIndex] = useState(0)

  const isPrevVisible = activeIndex - 1 >= 0
  const isNextVisible = activeIndex + 1 < products.length

  const translateValue = useMemo(() => {
    const cardSize = 100 / products.length
    const cardMargin = 1
    const initialPos = isMobileOrTablet ? cardMargin * 2 : cardSize / 2

    return isMobileOrTablet
      ? initialPos - (cardSize + cardMargin * 2) * activeIndex
      : initialPos - cardSize * activeIndex
  }, [isMobileOrTablet, activeIndex, products])

  const goToPrev = () => {
    setActiveIndex((pv) => pv - 1)
  }

  const goToNext = () => {
    setActiveIndex((pv) => pv + 1)
  }

  const [scope, animate] = useAnimate()

  useEffect(() => {
    animate(
      'div:first-of-type',
      {
        scaleX: [1.2, 1],
        transformOrigin: 'bottom right',
      },
      { duration: 1 },
    )
  }, [])

  return (
    <div className={styles.Container}>
      <motion.div
        ref={scope}
        className={styles.Container_slides}
        animate={{
          translateX: `${translateValue}%`,
        }}
        initial={false}
        transition={{ ease: 'easeOut', duration: 0.5 }}
      >
        {products.map((product, index) => (
          <ProductCard
            isActive={index === activeIndex}
            key={product.sku}
            product={product}
          ></ProductCard>
        ))}
      </motion.div>
      <div className={styles.Container_actions}>
        <AnimatePresence>
          {isPrevVisible && (
            <CarouselPaginationButton
              onClick={goToPrev}
              icon={{
                src: '/img/icons/left-arrow-icon.svg',
                alt: 'prev item icon',
              }}
            />
          )}
        </AnimatePresence>
        <AnimatePresence>
          {isNextVisible && (
            <CarouselPaginationButton
              onClick={goToNext}
              icon={{
                src: '/img/icons/right-arrow-icon.svg',
                alt: 'right item icon',
              }}
              isRight
            />
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
