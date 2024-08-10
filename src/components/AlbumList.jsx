import { useFetchAlbumsQuery, useAddAlbumMutation } from "../store"
import ExpandablePanel from "./ExpandablePanel"
import Skeleton from "./Skeleton"
const AlbumList = ({ user }) => {
  const { data, error, isLoading } = useFetchAlbumsQuery(user)
  const [addAlbum, results] = useAddAlbumMutation()

  const handleAddAlbum = () => {
    addAlbum(user)
  }
  let content
  if (isLoading) {
    content = <Skeleton times={3} />
  } else if (error) {
    content = <div>Error... </div>
  } else {
    content = data.map((album) => {
      const header = <div>{album.title}</div>
      return (
        <ExpandablePanel key={album.id} header={header}>
          List of Photos
        </ExpandablePanel>
      )
    })
  }

  return (
    <div>
      <div>
        Albums by {user.name}
        <button onClick={handleAddAlbum}>+ Add Album</button>
      </div>
      <div>{content}</div>
    </div>
  )
}

export default AlbumList
