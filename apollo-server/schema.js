const typeDefs = `#graphql
type Media {
  id: ID!
  src: String!
  alt: String!
}

type Product {
    sku: ID!
    name: String!,
    description: String!,
    detail: String!,
    categories: [Category],
    media: Media,
    gender: String!,
    price: String!
  }

  type Category {
    id: ID!,
    name: String!
  }

  type User {
    id: ID!
    name: String!
    password: String!
  }

  type Query {
    products: [Product]
    categories: [Category]
    user(name: String): User
  }
`

export default typeDefs