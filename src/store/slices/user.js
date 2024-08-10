import { createSlice } from "@reduxjs/toolkit"
import { fetchUsers } from "../thunk/fetchUsers"
import { addUser } from "../thunk/addUser"
import { removeUser } from "../thunk/removeUser"

const userSlice = createSlice({
  name: "users",
  initialState: {
    data: [],
    isLoading: false,
    error: null,
  },

  extraReducers(builder) {
    // fetch user
    builder.addCase(fetchUsers.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.isLoading = false
      state.data = action.payload
    })
    builder.addCase(fetchUsers.rejected, (state, action) => {
      state.isLoading = false
      state.error = action.error
    })
    //add user
    builder.addCase(addUser.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(addUser.fulfilled, (state, action) => {
      state.isLoading = false
      state.data.push(action.payload)
    })
    builder.addCase(addUser.rejected, (state, action) => {
      state.isLoading = false
      state.error = action.error
    })
    // remove user
    builder.addCase(removeUser.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(removeUser.fulfilled, (state, action) => {
      state.isLoading = false
      state.data = state.data.filter((deletedUser) => {
        return deletedUser.id !== action.payload.id
      })
    })
    builder.addCase(removeUser.rejected, (state, action) => {
      state.isLoading = false
      state.error = action.error
    })
  },
})

export const userReducer = userSlice.reducer
