import { createAddCard } from './addCart'
import { saveCart, getCart } from '../../infrastructure/store/cart'

export const addCart = createAddCard({
  saveCart,
  getCart
})