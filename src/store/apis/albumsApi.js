import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query"

const albumApi = createApi({
  reducerPath: "albums",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3005",
  }),
  endpoints(builder) {
    return {
      fetchAlbums: builder.query({
        query: (user) => {
          return {
            url: "/albums",
            params: {
              userId: user.id,
            },
            method: "Get",
          }
        },
      }),
    }
  },
})

export const { useFetchAlbumsQuery } = albumApi
export { albumApi }
