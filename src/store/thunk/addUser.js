import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"
import { faker } from "@faker-js/faker"
import { nanoid } from "@reduxjs/toolkit"
const addUser = createAsyncThunk("users/add", async () => {
  const response = await axios.post("http://localhost:3005/users", {
    name: faker.person.fullName(),
    // id: Math.floor(Math.random() * 2000),
    id: nanoid(),
  })

  return response.data
})

export { addUser }
