import { GoTrash } from "react-icons/go"
import { removeUser } from "../store"
import { useDispatch } from "react-redux"
import { useState } from "react"
import ExpandablePanel from "./ExpandablePanel"
import AlbumList from "./AlbumList"
const UsersListItem = ({ user }) => {
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)
  const dispatch = useDispatch()

  const handleUser = (user) => {
    setIsLoading(true)
    dispatch(removeUser(user))
      .unwrap()
      .catch((err) => {
        setIsError(err)
      })
      .finally(() => {
        setIsLoading(false)
      })
  }

  const header = (
    <>
      <button
        className="mr-4"
        onClick={() => handleUser(user)}
        disabled={isLoading}
      >
        {isError ? "error" : <GoTrash />}
      </button>
      {user.name}
    </>
  )
  return (
    <ExpandablePanel header={header}>
      <AlbumList user={user} />
    </ExpandablePanel>
  )
}

export default UsersListItem
