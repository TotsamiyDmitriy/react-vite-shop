import { configureStore } from '@reduxjs/toolkit'
import { catalogReducer, productReducer, cartReducer } from './'





export const store = configureStore({
  reducer: {
    catalogReducer,
    productReducer,
    cartReducer
  },
  devTools: true
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch