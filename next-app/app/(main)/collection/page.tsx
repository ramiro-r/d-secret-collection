import { CollectionPageParams } from '@/app/lib/types/interfaces'
import styles from './CollectionPage.module.scss'
import FilterSection from '@/app/ui/Filters/FilterSection'
import ProductCarousel from '@/app/ui/ProductCarousel/ProductCarousel'
import { Suspense } from 'react'

export default async function CollectionPage({
  searchParams,
}: {
  searchParams?: CollectionPageParams
}) {
  console.log(searchParams)
  return (
    <main className={styles.Page}>
      <FilterSection />
      <Suspense>
        <ProductCarousel params={searchParams} />
      </Suspense>
    </main>
  )
}
