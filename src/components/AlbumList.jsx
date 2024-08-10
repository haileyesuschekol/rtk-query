import { useFetchAlbumsQuery, useAddAlbumMutation } from "../store"
import ExpandablePanel from "./ExpandablePanel"
import Skeleton from "./Skeleton"

import AlbumsListItem from "./AlbumsListItem"
const AlbumList = ({ user }) => {
  const { data, error, isLoading } = useFetchAlbumsQuery(user)
  const [addAlbum, results] = useAddAlbumMutation()

  const handleAddAlbum = (user) => {
    addAlbum(user)
  }

  let content
  if (isLoading) {
    content = <Skeleton times={3} />
  } else if (error) {
    content = <div>Error... </div>
  } else {
    content = data.map((album) => {
      return <AlbumsListItem key={album.id} album={album} />
    })
  }

  return (
    <div>
      <div className=" m-2 flex flex-row item-center justify-between">
        <h3 className="text-lg font-bold">Albums by {user.name}</h3>
        {results.isLoading ? (
          "creating..."
        ) : (
          <button onClick={() => handleAddAlbum(user)}>+ Add Album</button>
        )}
      </div>
      <div>{content}</div>
    </div>
  )
}

export default AlbumList
