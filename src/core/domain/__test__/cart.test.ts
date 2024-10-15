import { addGoods, deleteGoods, Cart } from '../cart'
import { Goods } from '../goods'

const goods1 = {
  id: '1',
  name: 'Goods 1',
  price: 1,
}
const goods2 = {
  id: '2',
  name: 'Goods 2',
  price: 1.5,
}

describe('add a goods to cart', () => {
  it('add a goods', () => {
    const cart: Cart = {
      goodsList: []
    }
    const newCart = addGoods(cart, goods1)
    expect(newCart).toEqual({
      goodsList: [goods1]
    })
  })
  it('goods is null', () => {
    const cart: Cart = {
      goodsList: []
    }
    const newCart = addGoods(cart, null as unknown as Goods)
    expect(newCart).toEqual({
      goodsList: []
    })
  })
})

describe('delete a goods form cart', () => {
  it('delete a goods', () => {
    const cart: Cart = {
      goodsList: [goods1, goods2]
    }
    const newCart = deleteGoods(cart, goods2)
    expect(newCart).toEqual({
      goodsList: [goods1]
    })
  })
})