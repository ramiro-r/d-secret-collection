import { createPortal } from 'react-dom'
import styles from './FilterModal.module.scss'
import { motion } from 'framer-motion'

interface FilterModalProps {
  isOpen: boolean
  children: React.ReactNode
}

export default function FilterModal({ isOpen, children }: FilterModalProps) {
  if (!isOpen) return null

  return createPortal(
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
      }}
      transition={{
        ease: 'easeOut',
        duration: 0.5,
      }}
      className={styles.Modal}
    >
      {children}
    </motion.div>,
    document.getElementById('filter-panel')!,
  )
}
