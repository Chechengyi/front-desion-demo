import { createStore } from 'zustand'
import { Cart } from '../../../domain/cart'

export const cart = createStore<Cart>(() => ({
  goodsList: []
}))

