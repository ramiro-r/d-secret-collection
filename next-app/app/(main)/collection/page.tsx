import { CollectionPageParams } from '@/app/lib/types/interfaces'
import styles from './CollectionPage.module.scss'
import FilterSection from '@/app/ui/Filters/FilterSection'
import ProductCarousel from '@/app/ui/ProductCarousel/ProductCarousel'

export default async function CollectionPage({
  searchParams,
}: {
  searchParams?: CollectionPageParams
}) {
  return (
    <main className={styles.Page}>
      <FilterSection />
      <ProductCarousel params={searchParams} />
    </main>
  )
}
