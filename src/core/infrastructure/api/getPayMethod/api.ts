import { FetchPayMethod } from '../../../application/ports.output'

const mockData = [
  {
    id: 'paypal',
    name: 'paypal',
    icon: ''
  },
  {
    id: 'stripe',
    name: 'stripe',
    icon: ''
  },
]

export const getPayMethodFetch: FetchPayMethod = () => {
  return Promise.resolve(mockData)
}
