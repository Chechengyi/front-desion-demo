import { createBookOrder } from './bookOrder'
import { GetCart, CreateOrder } from '../ports.output'

describe('createOrder When Called', () => {
  it('get cart data and call createOrder api', async () => {
    const cart: ReturnType<GetCart> = {
      goodsList: [
        {
          id: '1',
          name: '1',
          price: 1,
        },
        {
          id: '2',
          name: '2',
          price: 2,
        }
      ]
    }
    const payMethod = {
      id: 'payMethodId',
      name: 'paypal',
      icon: 'paypal_icon',
    }
    const order = {
      orderId: 'orderId',
      cart,
      total: 3,
      created: '2024-10-07',
      payMethod,
    }
    const getCart: GetCart = jest.fn(() => cart)
    const createOrder: CreateOrder = jest.fn(() => Promise.resolve(order))
    const payOrder = jest.fn(() => Promise.resolve('url'))
    const bookOrder = createBookOrder({
      getCart,
      createOrder,
      payOrder,
    })
    const ret = await bookOrder(payMethod)
    expect(createOrder).toBeCalledWith(payMethod, cart)
    expect(payOrder).toBeCalledWith(order)
    expect(ret).toBe('url')
  })
})