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
  price: number
  formattedPrice: string
}

export interface Category {
  id: number
  name: string
  icon: Media
}

export interface CollectionPageParams {
  categories?: string
  gender?: string
  sort?: string
}
