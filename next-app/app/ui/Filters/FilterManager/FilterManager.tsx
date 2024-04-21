'use client'
import { Category } from '@/app/lib/types/interfaces'
import styles from './FilterManager.module.scss'
import { useState } from 'react'
import CategoryFilterManager from './CategoryFilterManager/CategoryFilterManager'
import SortManager from './SortManager/SortManager'

interface FilterManagerProps {
  categories: Category[]
}

export default function FilterManager({ categories }: FilterManagerProps) {
  const [isFilterPanelOpen, setFilterPanelOpen] = useState(false)
  const [isSortPanelOpen, setSortPanelOpen] = useState(false)

  const handleFilterPanelToggle = () => {
    setSortPanelOpen(false)
    setFilterPanelOpen(!isFilterPanelOpen)
  }

  const handleSortPanelToggle = () => {
    setFilterPanelOpen(false)
    setSortPanelOpen(!isSortPanelOpen)
  }

  return (
    <>
      <div className={styles.Filters}>
        <CategoryFilterManager
          categories={categories}
          onPanelToggle={handleFilterPanelToggle}
          isPanelOpen={isFilterPanelOpen}
        />
        <SortManager
          onPanelToggle={handleSortPanelToggle}
          isPanelOpen={isSortPanelOpen}
        />
      </div>
      <div id="filter-panel" className={styles.Filters_modalContainer} />
    </>
  )
}
