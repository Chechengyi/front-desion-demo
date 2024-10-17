import { useStore } from "zustand";
import { SelectGoodsList } from '../../../application/ports.input'
import { SaveGoods } from '../../../application/ports.output'
import { goodsList } from './store'

export const saveGoodsList: SaveGoods = (store) => {
  goodsList.setState(store, true)
}

export const useGoodsList: SelectGoodsList = () => useStore(goodsList, (store) => store)

