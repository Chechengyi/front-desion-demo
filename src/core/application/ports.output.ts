import { Goods } from '../domain/goods'
import { PayMethod } from '../domain/payMethod'
import { Cart } from '../domain/cart'
import { Order } from '../domain/order'

export type FetchGoods = () => Promise<Goods[]>

export type SaveGoods = (goods: Goods[]) => void

export type FetchPayMethod = () => Promise<PayMethod[]>

export type SavePayMethod = (payMethod: PayMethod[]) => void

export type GetCart = () => Cart

export type SaveCart = (cart: Cart) => void

export type CreateOrder = (payMethod: PayMethod, cart: Cart) => Promise<Order>

export type PayOrder = (order: Order) => Promise<string>