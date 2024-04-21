import { getClient } from '@/app/lib/graphql/apollo-client'
import {
  ALL_CATEGORIES,
  CategoryQuery,
} from '@/app/lib/graphql/queries/category'
import styles from '@/app/ui/Filters/FilterSection.module.scss'
import FilterManager from './FilterManager/FilterManager'

export default async function FilterSection() {
  const {
    data: { categories },
  } = await getClient().query<CategoryQuery>({
    query: ALL_CATEGORIES,
  })

  return (
    <section className={styles.Section}>
      <FilterManager categories={categories} />
    </section>
  )
}
