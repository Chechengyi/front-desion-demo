import { Goods } from '../domain/goods'
import { PayMethod } from '../domain/payMethod'

export type GetGoodsList = () => Promise<void>

export type GetPayMethod = () => Promise<void>

export type AddCart = (goods: Goods) => void

export type BookOrder = (payMethod: PayMethod) => Promise<string>