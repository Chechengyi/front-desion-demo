import { useStore } from 'zustand'
import { payMethod } from './store'

import { SelectPayMethod } from '../../../application/ports.input'
import { SavePayMethod } from '../../../application/ports.output'

export const savePayMethod: SavePayMethod = (data) => {
  payMethod.setState(data, true)
}

export const usePayMethod: SelectPayMethod = () => useStore(payMethod, (store) => store)