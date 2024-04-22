import { getClient } from '@/app/lib/graphql/apollo-client'
import Carousel from '../Carousel/Carousel'
import AddToCartButton from '../Cart/AddToCartButton/AddToCartButton'
import { GET_PRODUCTS, ProductsQuery } from '@/app/lib/graphql/queries/product'
import { CollectionPageParams } from '@/app/lib/types/interfaces'

interface ProductCarouselProps {
  params?: CollectionPageParams
}

export default async function ProductCarousel({
  params,
}: ProductCarouselProps) {
  const {
    data: { products },
  } = await getClient().query<ProductsQuery>({
    query: GET_PRODUCTS,
    variables: {
      gender: params?.gender,
      categories: params?.categories?.split(',').map((c) => Number(c)),
      sort: params?.sort,
    },
  })

  return (
    <>
      <Carousel products={products} />
      <AddToCartButton />
    </>
  )
}
