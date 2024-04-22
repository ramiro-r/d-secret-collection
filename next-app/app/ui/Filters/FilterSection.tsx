import { getClient } from '@/app/lib/graphql/apollo-client'
import {
  ALL_CATEGORIES,
  CategoryQuery,
} from '@/app/lib/graphql/queries/category'
import styles from '@/app/ui/Filters/FilterSection.module.scss'
import FilterManager from './FilterManager/FilterManager'
import AnimatedWrapper from '../AnimatedWrapper/AnimatedWrapper'

export default async function FilterSection() {
  const {
    data: { categories },
  } = await getClient().query<CategoryQuery>({
    query: ALL_CATEGORIES,
  })

  return (
    <AnimatedWrapper classNames={styles.Section} fromY={25}>
      <FilterManager categories={categories} />
    </AnimatedWrapper>
  )
}
