import React from 'react'
import {
  GetGoodsList,
  SelectGoodsList,
  SelectCart,
  AddCart,
} from '../../core/application/ports.input'

import "./index.css"
import { addCart } from '../../core/application/addCart'

type Props = {
  getGoodsList: GetGoodsList
  useGoodsList: SelectGoodsList
  useCart: SelectCart
  addCart: AddCart
}
export function GoodsList({ getGoodsList, useGoodsList, useCart }: Props) {

  const goodsList = useGoodsList()

  React.useEffect(() => {
    getGoodsList()
  }, [])

  const buy = (goods: typeof goodsList[number]) => {
    addCart(goods)
  }

  return (
    <div className="goods-warp">
      {
        goodsList.map((item) => (
          <div key={item.id} className="goods-item">
            <p>{item.name}</p>
            <p>￥{item.price}</p>
            <button onClick={() => buy(item)}>加入购物车</button>
          </div>
        ))
      }
    </div>
  )
}