'use client'
import { AnimatePresence, motion } from 'framer-motion'

interface AnimatedWrapperProps {
  children: React.ReactNode
  fromX?: number
  fromY?: number
  toX?: number
  toY?: number
  classNames?: string
}

export default function AnimatedWrapper({
  children,
  classNames,
  fromX = 0,
  fromY = 0,
  toX = 0,
  toY = 0,
}: AnimatedWrapperProps) {
  return (
    <AnimatePresence>
      <motion.div
        className={classNames}
        initial={{ x: fromX, y: fromY, opacity: 0 }}
        animate={{ x: toX, y: toY, opacity: 1 }}
        transition={{
          ease: 'easeOut',
          duration: 1,
        }}
        exit={{ opacity: 0 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
}
