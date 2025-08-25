import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counterSlice'
import cartReducer from '../features/cart/cart'
import wishlistReducer from '../features/wishlist/wishlist'
import authReducer from '../features/auth/auth'

export const makeStore = (preloadedState) => {
  return configureStore({
    reducer: {
      counter: counterReducer,
      cart: cartReducer,
      wishlist: wishlistReducer,
      auth: authReducer,
    },
    preloadedState,
  })
}

// Use this wrapper to create a store instance
// export const store = makeStore()