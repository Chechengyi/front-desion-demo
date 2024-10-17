import { FetchGoods } from '../../../application/ports.output'
import { Goods } from '../../../domain/goods'

const goodsMockData = [
  {
    goodsId: '1',
    goodsName: '商品1',
    priceValue: 2
  },
  {
    goodsId: '2',
    goodsName: '商品2',
    priceValue: 1
  },
  {
    goodsId: '3',
    goodsName: '商品3',
    priceValue: 1.5
  },
]

function toDomain(data: typeof goodsMockData):Goods[]  {
  return data.map((item) => ({
    id: item.goodsId,
    name: item.goodsName,
    price: item.priceValue
  }))
}

export const getGoodsListFetch: FetchGoods = () => {
  const data = toDomain(goodsMockData)
  return Promise.resolve(data)
}
