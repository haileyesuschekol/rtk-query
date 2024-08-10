import { configureStore } from "@reduxjs/toolkit"
import { setupListeners } from "@reduxjs/toolkit/query"
import { userReducer } from "./slices/user"
import { fetchUsers } from "./thunk/fetchUsers"
import { addUser } from "./thunk/addUser"
import { removeUser } from "./thunk/removeUser"
import { albumsApi } from "./apis/albumsApi"
import {
  useFetchAlbumsQuery,
  useAddAlbumMutation,
  useRemoveAlbumMutation,
} from "./apis/albumsApi"
export const store = configureStore({
  reducer: {
    users: userReducer,
    [albumsApi.reducerPath]: albumsApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(albumsApi.middleware)
  },
})

setupListeners(store.dispatch)

export { useFetchAlbumsQuery, useAddAlbumMutation, useRemoveAlbumMutation }
export { fetchUsers, addUser, removeUser }
