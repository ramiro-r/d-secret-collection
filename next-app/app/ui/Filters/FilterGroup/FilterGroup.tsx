import { MouseEventHandler } from 'react'
import FilterToggle from '../FilterToggle/FilterToggle'
import { Media } from '@/app/lib/types/interfaces'
import FilterModal from '../FilterModal/FilterModal'
import topArrow from '@/public/img/icons/top-arrow.svg'
import styles from './FilterGroup.module.scss'
import Image from 'next/image'
import cn from 'classnames'

interface FilterGroupProps {
  children: React.ReactNode
  text: string
  icon: Media
  onToggleClick: MouseEventHandler<HTMLButtonElement>
  isPanelOpen: boolean
}

export default function FilterGroup({
  children,
  text,
  icon,
  onToggleClick,
  isPanelOpen,
}: FilterGroupProps) {
  const imageClass = cn(styles.Container_arrow, {
    [styles.Container_arrow__active]: isPanelOpen,
  })

  return (
    <div className={styles.Container}>
      <FilterToggle text={text} icon={icon} onClick={onToggleClick} isLarge />
      <Image
        className={imageClass}
        src={topArrow}
        width={22}
        height={11}
        alt="top arrow"
      />
      <FilterModal isOpen={isPanelOpen}>{children}</FilterModal>
    </div>
  )
}
