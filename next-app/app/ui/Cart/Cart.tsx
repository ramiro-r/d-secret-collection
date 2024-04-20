import Image from 'next/image'
import cartIcon from '@/public/img/icons/cart-icon.svg'

export default function Cart() {
  return <Image src={cartIcon} alt="cart icon" />
}
