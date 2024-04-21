'use client'

import { Media } from '@/app/lib/types/interfaces'
import Image from 'next/image'
import styles from './FilterToggle.module.scss'
import { MouseEventHandler } from 'react'
import cn from 'classnames'

interface FilterToggleProps {
  text: string
  onClick: MouseEventHandler<HTMLButtonElement>
  icon?: Media
  isLarge?: boolean
  isActive?: boolean
}

export default function FilterToggle<T>({
  text,
  icon,
  onClick,
  isLarge,
  isActive,
}: FilterToggleProps) {
  const toggleClass = cn(styles.Toggle, { [styles.Toggle__large]: isLarge })
  const buttonClass = cn(styles.Toggle_button, {
    [styles.Toggle_button__active]: isActive,
    [styles.Toggle_button__large]: isLarge,
  })

  return (
    <div className={toggleClass}>
      {icon && <Image src={icon.src} alt={icon.alt} width={22} height={22} />}
      <button className={buttonClass} onClick={onClick}>
        {text}
      </button>
    </div>
  )
}
