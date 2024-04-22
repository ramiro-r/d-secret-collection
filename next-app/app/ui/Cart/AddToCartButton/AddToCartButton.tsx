'use client'
import Image from 'next/image'
import styles from '@/app/ui/Cart/AddToCartButton/AddToCartButton.module.scss'
import cartIcon from '@/public/img/icons/cart-icon.svg'
import AnimatedWrapper from '@/app/ui/AnimatedWrapper/AnimatedWrapper'

export default function AddToCartButton() {
  const handleOnClick = async () => {
    console.log('Add to cart!')
  }

  return (
    <AnimatedWrapper fromY={50}>
      <button className={`Button ${styles.Button}`} onClick={handleOnClick}>
        ADD TO CART
        <Image className={styles.Button_icon} src={cartIcon} alt="cart icon" />
      </button>
    </AnimatedWrapper>
  )
}
