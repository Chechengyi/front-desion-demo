import React, { useMemo } from 'react'
import {
  SelectCart,
} from '../../core/application/ports.input'
import { totalPrice } from '../../core/domain/goods'

type Props = {
  useCart: SelectCart
}

export function Cart({ useCart }: Props) {
  const cart = useCart()

  const total = useMemo(() => {
    return totalPrice(cart.goodsList)
  }, [cart])

  return (
    <div>
      <div>商品总数：{cart.goodsList.length}</div>
      <div>总价：{total}</div>
    </div>
  )
}