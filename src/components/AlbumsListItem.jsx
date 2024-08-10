import { GoTrash } from "react-icons/go"
import ExpandablePanel from "./ExpandablePanel"
import { useRemoveAlbumMutation } from "../store"
const AlbumsListItem = ({ album }) => {
  const [removeAlbum, results] = useRemoveAlbumMutation()

  const handleRemoveAlbum = (album) => {
    removeAlbum(album)
  }

  const header = (
    <>
      <button
        className="mr-2"
        disabled={results.isLoading}
        onClick={() => handleRemoveAlbum(album)}
      >
        <GoTrash />
      </button>
      {album.title}
    </>
  )
  return (
    <ExpandablePanel key={album.id} header={header}>
      List of Photos
    </ExpandablePanel>
  )
}

export default AlbumsListItem
