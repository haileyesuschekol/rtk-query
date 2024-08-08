import { configureStore } from "@reduxjs/toolkit"
import { userReducer } from "./slices/user"
import { fetchUsers } from "./thunk/fetchUsers"
import { addUser } from "./thunk/addUser"
import { removeUser } from "./thunk/removeUser"
export const store = configureStore({
  reducer: {
    users: userReducer,
  },
})

export { fetchUsers, addUser, removeUser }
