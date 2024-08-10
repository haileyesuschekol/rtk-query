/* eslint-disable react/prop-types */
import { GoTrash } from "react-icons/go"
import ExpandablePanel from "./ExpandablePanel"
import { useRemoveAlbumMutation } from "../store"
import PhotosList from "./PhotosList"
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
      <PhotosList album={album} />
    </ExpandablePanel>
  )
}

export default AlbumsListItem
