import { AddCart } from '../ports.input'
import { SaveCart, GetCart } from '../ports.output'
import { Goods } from '../../domain/goods'
import { addGoods } from '../../domain/cart'

type Dependencies = {
  saveCart: SaveCart
  getCart: GetCart
}

export const createAddCard = ({
  saveCart,
  getCart
}: Dependencies): AddCart => (goods: Goods) => {
  const cart = getCart()
  const newCart = addGoods(cart, goods)
  saveCart(newCart)
}