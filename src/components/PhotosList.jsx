/* eslint-disable react/prop-types */
import { useFetchphotosQuery, useAddPhotoMutation } from "../store"
import PhotosListItem from "./PhotosListItem"
const PhotosList = ({ album }) => {
  const { data, error, isFetching } = useFetchphotosQuery(album)
  const [addPhoto] = useAddPhotoMutation()

  const handleAddPhoto = (album) => {
    addPhoto(album)
  }

  let content

  if (isFetching) {
    content = <div>Loading...</div>
  } else if (error) {
    content = <div>Error</div>
  } else {
    content = data.map((photo) => {
      return <PhotosListItem key={photo.id} photo={photo} />
    })
  }
  return (
    <div>
      <div className="m-2  flex flex-row items-center justify-between">
        <h3 className="text-lg font-bold">pics by {album.title}</h3>
        <button onClick={() => handleAddPhoto(album)} disabled={isFetching}>
          + Add photo
        </button>
      </div>
      <div className="mx-8 flex flex-row flex-wrap justify-center">
        {content}
      </div>
    </div>
  )
}

export default PhotosList
