import { GetGoodsList } from '../ports.input'
import { FetchGoods, SaveGoods } from '../ports.output'

type Dependencies = {
  fetchGoods: FetchGoods,
  saveGoods: SaveGoods,
}

export const createGetGoodsList = ({
  fetchGoods,
  saveGoods
}: Dependencies): GetGoodsList => async () => {
  const goods = await fetchGoods()
  saveGoods(goods)
}