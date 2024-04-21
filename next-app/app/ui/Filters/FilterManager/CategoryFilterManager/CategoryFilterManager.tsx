import { Category } from '@/app/lib/types/interfaces'
import FilterGroup from '../../FilterGroup/FilterGroup'
import FilterToggle from '../../FilterToggle/FilterToggle'
import { MouseEventHandler } from 'react'
import styles from '@/app/ui/Filters/FilterManager/FilterManager.module.scss'
import { useSearchParams, usePathname, useRouter } from 'next/navigation'

interface CategoryFilterManagerProps {
  categories: Category[]
  onPanelToggle: MouseEventHandler<HTMLButtonElement>
  isPanelOpen: boolean
}
export default function CategoryFilterManager({
  categories,
  onPanelToggle,
  isPanelOpen,
}: CategoryFilterManagerProps) {
  const filterIcon = { src: '/img/icons/filter-icon.svg', alt: 'filter icon' }
  const searchParams = useSearchParams()
  const pathName = usePathname()
  const { replace } = useRouter()

  const handleGenderChange = (gender: string) => {
    const params = new URLSearchParams(searchParams)
    const currentGender = searchParams.get('gender')

    if (currentGender === gender) {
      params.delete('gender')
    } else {
      params.set('gender', gender)
    }

    replace(`${pathName}?${params.toString()}`)
  }

  const handleCategoryChange = (categoryId: number) => {
    const params = new URLSearchParams(searchParams)
    const categoryParam = searchParams.get('categories')?.split(',')
    let newCategories = []

    if (categoryParam?.includes(categoryId.toString())) {
      newCategories = categoryParam.filter((c) => c !== categoryId.toString())
    } else if (!categoryParam) {
      newCategories?.push(categoryId.toString())
    } else {
      newCategories = categoryParam
      newCategories.push(categoryId.toString())
    }

    if (newCategories.length) {
      params.set('categories', newCategories.join(','))
    } else {
      params.delete('categories')
    }

    replace(`${pathName}?${params.toString()}`)
  }

  const hasCategoryParam = (categoryId: number) => {
    const categoryParam = searchParams.get('categories')?.split(',')
    return categoryParam?.includes(categoryId.toString())
  }

  return (
    <FilterGroup
      text="FILTERS"
      icon={filterIcon}
      onToggleClick={onPanelToggle}
      isPanelOpen={isPanelOpen}
    >
      <div className={styles.Filters_group}>
        <FilterToggle
          text="WOMEN"
          icon={{ src: '/img/icons/women-icon.svg', alt: 'women icon' }}
          onClick={() => handleGenderChange('women')}
          isActive={searchParams.get('gender') === 'women'}
        />
        <FilterToggle
          text="MEN"
          icon={{ src: '/img/icons/men-icon.svg', alt: 'men icon' }}
          onClick={() => handleGenderChange('men')}
          isActive={searchParams.get('gender') === 'men'}
        />
      </div>
      <div className={styles.Filters_group}>
        {categories.map((c) => (
          <FilterToggle
            key={c.id}
            text={c.name}
            icon={c.icon}
            onClick={() => handleCategoryChange(c.id)}
            isActive={hasCategoryParam(c.id)}
          />
        ))}
      </div>
    </FilterGroup>
  )
}
