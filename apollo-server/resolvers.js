import { categories, images, products, users } from "./data.js"

const resolvers = {
  Query: {
    products: (_parent, {gender, categories, sort}) => {
      let result = products
      if (gender) {
        result = result.filter(product => {
          return product.gender === gender 
        })
      }

      if (categories && categories.length && result.length) {
        result = result.filter(product => {
          return product.categories.some(c => categories.includes(c))
        })
      }

      if (sort) {
        return result.sort((a, b) => {
          if (sort === 'asc') return a.price - b.price
          return b.price - a.price
        })
      }

      return result
    },
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
  },
  Category: {
    icon: (parent) => {
      return images.find(m => m.id === parent.icon)
    }
  }
}

export default resolvers