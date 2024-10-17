import { savePayMethod } from '../../infrastructure/store/payMethod'
import { getPayMethodFetch } from '../../infrastructure/api/getPayMethod'
import { createGetPayMethodList } from './getPayMethodList'

export const getPayMethod = createGetPayMethodList({
  savePayMethod,
  fetchPayMethod: getPayMethodFetch
})