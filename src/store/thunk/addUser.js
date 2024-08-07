import { asyncThunkCreator } from "@reduxjs/toolkit"
import axios from "axios"
import { faker } from "@faker-js/faker"
// import { nanoid } from "@reduxjs/toolkit"
const addUser = asyncThunkCreator("users/add", async () => {
  const response = await axios.post("http://localhost:3005/users", {
    name: faker.name.fullName(),
  })

  return response.data
})

export { addUser }
