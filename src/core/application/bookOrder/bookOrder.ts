import { BookOrder } from '../ports.input'
import { CreateOrder, GetCart, PayOrder } from '../ports.output'
import { PayMethod } from '../../domain/payMethod'


type Dependencies = {
  getCart: GetCart,
  createOrder: CreateOrder,
  payOrder: PayOrder,
}

export const createBookOrder = ({
  getCart,
  createOrder,
  payOrder,
}: Dependencies): BookOrder => async (payMethod: PayMethod): Promise<string> => {
  const cart = getCart()
  const order = await createOrder(payMethod, cart)
  const url = await payOrder(order)
  return url
}

