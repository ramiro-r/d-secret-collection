import { ApolloServer, gql } from "apollo-server"
import { products, users } from "./data.js"

const typeDefs = gql`

  type Product {
    sku: ID!
    name: String,
    description: String,
    detail: String,
    categories: [String],
    media: String,
    gender: String,
    price: String
  }

  type User {
    id: ID!
    name: String
    password: String
  }

  type Query {
    allProducts: [Product]
    user(name: String): User
  }
`

const resolvers = {
  Query: {
    allProducts: () => products,
    user: (_root, {name}) => {
      return users.find(user => {
        return user.name === name
      })
    },
  }
}

const server = new ApolloServer({ typeDefs, resolvers })

server.listen().then(({ url }) => {
  console.log(`Server ready at ${url}`)
})