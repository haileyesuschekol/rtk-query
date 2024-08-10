import { fetchBaseQuery } from "@reduxjs/toolkit/query"
import { createApi } from "@reduxjs/toolkit/query/react"
import { faker } from "@faker-js/faker"
const albumsApi = createApi({
  reducerPath: "albums",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3005",
  }),
  endpoints(builder) {
    return {
      removeAlbum: builder.mutation({
        // invalidatesTags:(result , error, album)->{
        //   return[{type:'Album', id:album.userId}]
        // },
        invalidatesTags: (result, error, album) => {
          return [{ type: "UsersAlbums", id: album.userId }]
        },
        query: (album) => {
          return {
            method: "DELETE",
            url: `/albums/${album.id}`,
          }
        },
      }),
      addAlbum: builder.mutation({
        // invalidatesTags: (result, error, user) => {
        //   return [{ type: "Album", id: user.id }]
        // },
        invalidatesTags: (result, error, user) => {
          return [{ type: "UsersAlbums", id: user.id }]
        },
        query: (user) => {
          return {
            url: "/albums",
            method: "POST",
            body: {
              userId: user.id,
              title: faker.commerce.productName(),
            },
          }
        },
      }),
      fetchAlbums: builder.query({
        // providesTags: (result, error, user) => {
        //   return [{ type: "Album", id: user.id }]
        // },
        providesTags: (result, error, user) => {
          const tags = result.map((album) => {
            return { type: "Album", id: album.id }
          })
          tags.push({ type: "UsersAlbums", id: user.id })
          return tags
        },
        query: (user) => {
          return {
            url: "/albums",
            params: {
              userId: user.id,
            },
            method: "GET",
          }
        },
      }),
    }
  },
})

export const {
  useRemoveAlbumMutation,
  useFetchAlbumsQuery,
  useAddAlbumMutation,
} = albumsApi
export { albumsApi }
