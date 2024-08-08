import { GoTrash } from "react-icons/go"
import { removeUser } from "../store"
import { useDispatch } from "react-redux"
import { useState } from "react"
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
  return (
    <div className="mb-2 border rounded">
      <div className="flex p-2 justify-between items-center cursor-pointer">
        <div className="flex flex-row items-center justify-between">
          <button
            className="mr-4"
            onClick={() => handleUser(user)}
            disabled={isLoading}
          >
            {isError ? "error" : <GoTrash />}
          </button>
          {user.name}
        </div>
      </div>
    </div>
  )
}

export default UsersListItem
