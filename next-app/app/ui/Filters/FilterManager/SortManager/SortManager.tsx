import { MouseEventHandler } from 'react'
import FilterGroup from '../../FilterGroup/FilterGroup'
import FilterToggle from '../../FilterToggle/FilterToggle'
import styles from '@/app/ui/Filters/FilterManager/FilterManager.module.scss'
import { usePathname, useSearchParams, useRouter } from 'next/navigation'

interface SortManagerProps {
  onPanelToggle: MouseEventHandler<HTMLButtonElement>
  isPanelOpen: boolean
}

export default function SortManager({
  onPanelToggle,
  isPanelOpen,
}: SortManagerProps) {
  const sortIcon = { src: '/img/icons/sort-icon.svg', alt: 'sort icon' }
  const searchParams = useSearchParams()
  const pathName = usePathname()
  const { replace } = useRouter()

  const handleSortChange = (sort: string) => {
    const params = new URLSearchParams(searchParams)
    const currentSort = searchParams.get('sort')

    if (currentSort === sort) {
      params.delete('sort')
    } else {
      params.set('sort', sort)
    }

    replace(`${pathName}?${params.toString()}`)
  }

  return (
    <FilterGroup
      text="SORT"
      icon={sortIcon}
      onToggleClick={onPanelToggle}
      isPanelOpen={isPanelOpen}
    >
      <div className={styles.Filters_group}>
        <FilterToggle
          text="BY PRICE ASC"
          onClick={() => handleSortChange('asc')}
          isActive={searchParams.get('sort') === 'asc'}
        />
        <FilterToggle
          text="BY PRICE DESC"
          onClick={() => handleSortChange('des')}
          isActive={searchParams.get('sort') === 'des'}
        />
      </div>
    </FilterGroup>
  )
}
