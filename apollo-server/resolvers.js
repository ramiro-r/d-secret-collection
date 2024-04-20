import { categories, images, products, users } from "./data.js"

const resolvers = {
  Query: {
    products: () => products,
    categories: () => categories,
    user: (_parent, {name}) => {
      return users.find(user => {
        return user.name === name
      })
    },
  },
  Product: {
    categories: (parent) => {
      return parent.categories.map(category => ({
          ...categories.find(c => c.id === category)
        }))
    },
    media: (parent) => {
      return images.find(m => m.id === parent.media)
    }
  }
}

export default resolvers