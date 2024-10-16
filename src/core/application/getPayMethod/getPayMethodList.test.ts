import { createGetPayMethodList } from './getPayMethodList'
import { FetchPayMethod, SavePayMethod } from '../ports.output'

describe('getPayMethod When Called', () => {
  it('The API for getting and saving goods should be called', async () => {
    const payMethod: Awaited<ReturnType<FetchPayMethod>> = []
    const fetchPayMethod: FetchPayMethod = jest.fn(() => Promise.resolve(payMethod))
    const savePayMethod: SavePayMethod = jest.fn()
    const getPayMethodList = createGetPayMethodList({
      fetchPayMethod,
      savePayMethod,
    })
    await getPayMethodList()
  })
})