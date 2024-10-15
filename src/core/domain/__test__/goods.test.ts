import { totalPrice, Goods } from '../goods'

test('totalPrice', () => {
  const data: Goods[] = [
    {
      id: '1',
      name: 'Goods 1',
      price: 1,
    },
    {
      id: '2',
      name: 'Goods 2',
      price: 1.5,
    }
  ]
  const ret = totalPrice(data)
  expect(ret).toBe(2.5)
})