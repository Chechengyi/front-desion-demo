import { Cart as Component } from './cart'
import { useCart } from '../../core/infrastructure/store/cart'

export const Cart = () => Component({
  useCart
})