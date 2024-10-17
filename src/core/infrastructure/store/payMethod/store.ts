import { createStore } from 'zustand'

import { PayMethod } from '../../../domain/payMethod'

export const payMethod = createStore<PayMethod[]>(() => [])