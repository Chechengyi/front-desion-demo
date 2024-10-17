import { createBookOrder } from './bookOrder'

import { getCart } from '../../infrastructure/store/cart'

const mockCreateOrder = () => {
  console.log('mock 下单接口，基础设置中的 bookOrder 没实现')
  return Promise.resolve({
    orderId: 'mockOrder',
    cart: [],
    total: 10,
    created: '2024-10-17',
    payMethod: {
      id: 'pay',
      name: 'paypal',
      icon: '',
    }
  }) as any
}

const mockPayOrder = () => {
  console.log('mock 支付接口，基础设置中的 payOrder 没实现')
  return Promise.resolve('url')
}

export const bookOrder = createBookOrder({
  getCart,
  createOrder: mockCreateOrder,
  payOrder: mockPayOrder
})