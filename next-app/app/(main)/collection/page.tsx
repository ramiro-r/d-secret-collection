import Carousel from '@/app/ui/Carousel/Carousel'
import styles from './CollectionPage.module.scss'
import { Product } from '@/app/lib/types/interfaces'
import ProductCard from '@/app/ui/ProductCard/ProductCard'
import AddToCartButton from '@/app/ui/Cart/AddToCartButton/AddToCartButton'

// Apollo client is still in experimental phase on Next 14 RSC:
// https://github.com/apollographql/apollo-client-nextjs
// The decision is to keep my big fetch of products in a server component so is Next who handles caching
// instead of transforming the page into a client component to use the useQuery hook
// The revalidate is to have ISR in case more products are contributed/added, prices changes, etc. which it shouldn't happen so often
const getProducts = async (): Promise<Product[]> => {
  const response = await fetch(process.env.SERVER_URL as string, {
    method: 'POST',
    body: JSON.stringify({
      query: `
        query {
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
      `,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
    next: { revalidate: 0 },
  })
  const {
    data: { products },
  }: { data: { products: Product[] } } = await response.json()
  return products
}

export default async function CollectionPage() {
  const products = await getProducts()

  return (
    <main className={styles.Page}>
      <Carousel>
        {products.map((product) => (
          <ProductCard key={product.sku} product={product}></ProductCard>
        ))}
      </Carousel>
      <AddToCartButton />
    </main>
  )
}
