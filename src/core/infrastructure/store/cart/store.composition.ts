import { useStore } from 'zustand'
import { cart } from './store'
import { SaveCart, GetCart } from '../../../application/ports.output'
import { SelectCart } from '../../../application/ports.input'

export const saveCart: SaveCart = cart.setState

export const getCart: GetCart = cart.getState

export const useCart: SelectCart = () => useStore(cart, (store) => store)