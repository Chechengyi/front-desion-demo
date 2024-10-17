import { getPayMethod } from '../../core/application/getPayMethod'
import { usePayMethod } from '../../core/infrastructure/store/payMethod'
import { bookOrder } from '../../core/application/bookOrder'

import { PayMethod as Component } from './payMethod'

export const PayMethod = () => Component({
  getPayMethod,
  usePayMethod,
  bookOrder,
})