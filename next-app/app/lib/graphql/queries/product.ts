import { gql } from '@apollo/client'

export const ALL_PRODUCTS = gql`
  query Query {
    products {
      sku
      name
      gender
      media {
        src
        alt
      }
      price
      detail
      description
      categories {
        id
        name
      }
    }
  }
`
