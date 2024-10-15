import { Cart } from './cart'

export type Order = {
  orderId: UniqueId;
  cart: Cart;
  total: PriceCent;
  created: DateTimeString;
}