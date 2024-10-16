import { GetPayMethod } from '../ports.input'
import { FetchPayMethod, SavePayMethod } from '../ports.output'

type Dependencies = {
  fetchPayMethod: FetchPayMethod,
  savePayMethod: SavePayMethod,
}

export const createGetPayMethodList = ({
  fetchPayMethod,
  savePayMethod
}: Dependencies): GetPayMethod => async () => {
  const list = await fetchPayMethod()
  savePayMethod(list)
}