import { gql } from '@apollo/client'
import { Category } from '../../types/interfaces'

export type CategoryQuery = {
  categories: Category[]
}

export const ALL_CATEGORIES = gql`
  query {
    categories {
      id
      name
      icon {
        src
        alt
      }
    }
  }
`
