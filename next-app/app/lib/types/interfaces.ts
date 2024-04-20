export interface User {
  id: number
  name: string
  password: string
}

export interface Media {
  src: string
  alt: string
}

export interface Product {
  sku: number
  name: string
  description: string
  detail: string
  categories: string[]
  media: Media
  gender: string
  price: string
}
