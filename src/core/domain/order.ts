import { Cart } from './cart'
import { PayMethod } from './payMethod'

export type Order = {
  orderId: UniqueId;
  cart: Cart;
  total: PriceCent;
  created: DateTimeString;
  payMethod: PayMethod;
}