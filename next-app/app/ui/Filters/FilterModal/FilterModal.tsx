import { createPortal } from 'react-dom'
import styles from './FilterModal.module.scss'

interface FilterModalProps {
  isOpen: boolean
  children: React.ReactNode
}

export default function FilterModal({ isOpen, children }: FilterModalProps) {
  if (!isOpen) return null

  return createPortal(
    <div className={styles.Modal}>{children}</div>,
    document.getElementById('filter-panel')!,
  )
}
