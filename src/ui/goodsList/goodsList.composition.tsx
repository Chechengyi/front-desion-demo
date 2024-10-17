import { getGoodsList } from '../../core/application/getGoodsList'
import { addCart } from '../../core/application/addCart'
import { useGoodsList } from '../../core/infrastructure/store/goods'
import { useCart } from '../../core/infrastructure/store/cart'
import { GoodsList as Component } from './goodsList'

export const GoodsList = () => Component({
  getGoodsList,
  useGoodsList,
  useCart,
  addCart,
})