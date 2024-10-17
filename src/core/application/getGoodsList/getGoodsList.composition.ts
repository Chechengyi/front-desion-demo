import { getGoodsListFetch } from '../../infrastructure/api/getGoodsList'
import { saveGoodsList } from '../../infrastructure/store/goods'
import { createGetGoodsList } from './getGoodsList'

export const getGoodsList = createGetGoodsList({
  fetchGoods: getGoodsListFetch,
  saveGoods: saveGoodsList
})
