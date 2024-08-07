import { configureStore } from "@reduxjs/toolkit"
import { userReducer } from "./slices/user"
import { fetchUsers } from "./thunk/fetchUsers"
import { addUser } from "./thunk/addUser"
export const store = configureStore({
  reducer: {
    users: userReducer,
  },
})

export { fetchUsers, addUser }
