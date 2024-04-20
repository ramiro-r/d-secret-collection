import { Product } from '@/app/lib/types/interfaces'
import styles from './ProductCard.module.scss'
import Image from 'next/image'

interface CardProps {
  product: Product
}

export default function ProductCard({ product }: CardProps) {
  return (
    <div className={styles.Card}>
      <div className={styles.Card_imageContainer}>
        <Image src={product.media.src} fill alt={product.media.alt} />
      </div>
      <div className={styles.Card_content}>
        <p className={styles.Card_content__description}>
          {product.description}
        </p>
        <h3 className={styles.Card_content__name}>{product.name}</h3>
        <p className={styles.Card_content__price}>{product.price}</p>
      </div>
    </div>
  )
}
