export const products = [{
  sku: 1,
  name: 'men shirt',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  detail: 'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  categories: [1],
  media: 1,
  gender: 'men',
  price: 19000,
  formattedPrice: '19 000 €'
}, {
  sku: 2,
  name: 'lady bag',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  detail: 'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  categories: [2],
  media: 2,
  gender: 'women',
  price: 3000,
  formattedPrice: '3 000 €'
}, {
  sku: 3,
  name: 'dior jewelry',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  detail: 'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  categories: [3],
  media: 3,
  gender: 'women',
  price: 100000,
  formattedPrice: '100 000 €'
}]
export const images = [
  { id: 1, src: '/img/product1.png', alt: 'picture of Dior men shirt' }, 
  { id: 2, src: '/img/product2.png', alt: 'picture of Dior bag' }, 
  { id: 3, src: '/img/product3.png', alt: 'picture of Dior jewelery' }, 
  { id: 4, src: '/img/icons/shirt-icon.svg', alt: 'shirt icon'},
  { id: 5, src: '/img/icons/bag-icon.svg', alt: 'bag icon'},
  { id: 6, src: '/img/icons/jewelry-icon.svg', alt: 'jewelry icon'}
]
export const categories = [{ id: 1, name: 'shirt', icon: 4}, {id: 2, name: 'bags', icon: 5}, {id: 3, name: 'jewelry', icon: 6}]
export const users = [{ id: 1, name: "test", password: "$2y$10$U.6xznv/3cwIAjZTEgiTL.xli0H5O0rFi/teNi29NBYDhUOWMZori" }, {id: 2, name: "ramiro", password: "$2a$12$/mYzBsoYSZ84gQs7x2chY.u3Topez/A.MTKkYFpQn8IeY1qloZsOm"}]
export const carts = [{ user: 0, products: []}]