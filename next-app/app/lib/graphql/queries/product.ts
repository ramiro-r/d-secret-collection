import { gql } from '@apollo/client'
import { Product } from '@/app/lib/types/interfaces'

export type ProductsQuery = {
  products: Product[]
}

export const GET_PRODUCTS = gql`
  query ($sort: String, $categories: [Int], $gender: String) {
    products(sort: $sort, categories: $categories, gender: $gender) {
      sku
      name
      price
      formattedPrice
      categories {
        name
      }
      description
      detail
      media {
        src
        alt
      }
    }
  }
`
