import { createStore } from "zustand";
import { Goods } from '../../../domain/goods'

export const goodsList = createStore<Goods[]>(() => [])