import { configureStore } from "@reduxjs/toolkit"
import { userReducer } from "./slices/user"
import { fetchUsers } from "./thunk/fetchUsers"
export const store = configureStore({
  reducer: {
    users: userReducer,
  },
})

export { fetchUsers }
