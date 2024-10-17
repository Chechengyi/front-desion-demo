import { Goods } from '../domain/goods'
import { Cart } from '../domain/cart'
import { PayMethod } from '../domain/payMethod'

export type GetGoodsList = () => Promise<void>

export type GetPayMethod = () => Promise<void>

export type AddCart = (goods: Goods) => void

export type BookOrder = (payMethod: PayMethod) => Promise<string>

export type SelectGoodsList = Selector<Goods[]>

export type SelectCart = Selector<Cart>

export type SelectPayMethod = Selector<PayMethod[]>