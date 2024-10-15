import { Goods } from './goods'

export type Cart = {
  goodsList: Goods[]
}

// 最好使用纯函数，既不要去更改 cart，而是返回一个新的 cart
export function addGoods(cart: Cart, goods: Goods): Cart {
  if (!goods) return cart
  return {
    ...cart,
    goodsList: [...cart.goodsList, goods]
  }
}

export function deleteGoods(cart: Cart, goods: Goods): Cart {
  const goodsList = cart.goodsList.filter((item) => item.id !== goods.id)
  return {
    ...cart,
    goodsList,
  }
}