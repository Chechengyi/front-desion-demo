import { createGetGoodsList } from './getGoodsList'
import {  FetchGoods, SaveGoods} from '../ports.output'

describe('getGoodsList When Called', () => {
  it('The API for getting and saving goods should be called', async () => {
    const goods: Awaited<ReturnType<FetchGoods>> = []
    const fetchGoods: FetchGoods = jest.fn(() => Promise.resolve(goods))
    const saveGoods: SaveGoods = jest.fn()
    const getGoodsList = createGetGoodsList({
      fetchGoods,
      saveGoods,
    })
    await getGoodsList()
    expect(fetchGoods).toBeCalledTimes(1)
    expect(saveGoods).toBeCalledWith(goods)
  })
})