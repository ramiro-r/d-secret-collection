import { motion } from 'framer-motion'
import styles from './CarouselPaginationButton.module.scss'
import { MouseEventHandler } from 'react'
import { Media } from '@/app/lib/types/interfaces'
import Image from 'next/image'
import classNames from 'classnames'

interface CarouselPaginationButtonProps {
  onClick: MouseEventHandler<HTMLButtonElement>
  icon: Media
  isRight?: boolean
}

export default function CarouselPaginationButton({
  onClick,
  icon,
  isRight,
}: CarouselPaginationButtonProps) {
  const buttonClass = classNames(styles.Button, {
    [styles.Button__right]: isRight,
  })
  return (
    <motion.button
      className={buttonClass}
      onClick={onClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ opacity: { ease: 'easeInOut', duration: 0.5 } }}
      whileHover={{ scale: 1.1, opacity: 0.5 }}
      style={{ originY: 0, originX: isRight ? 0 : 1 }}
    >
      <Image src={icon.src} fill alt={icon.alt} />
    </motion.button>
  )
}
