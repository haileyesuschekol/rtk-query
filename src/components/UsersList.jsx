import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchUsers, addUser } from "../store"
import Skeleton from "./Skeleton"
import UsersListItem from "./UsersListItem"

// import Button from "./Button"
const UsersList = () => {
  const [isLoadingUser, setIsLoadingUser] = useState(false)
  const [loadingUserError, setLoadingUserError] = useState(false)
  const [isCreatingUser, setisCreatingUser] = useState(false)
  const [creatingUserError, setCreatingUserError] = useState(false)

  const dispatch = useDispatch()

  const { data } = useSelector((state) => {
    return state.users
  })

  useEffect(() => {
    setIsLoadingUser(true)
    dispatch(fetchUsers())
      .unwrap()
      .catch((err) => {
        setLoadingUserError(err)
      })
      .finally(() => {
        setIsLoadingUser(false)
      })
  }, [])

  const handleUserAdd = () => {
    setisCreatingUser(true)
    dispatch(addUser())
      .unwrap()
      .catch((err) => {
        setCreatingUserError(err)
      })
      .finally(() => {
        setisCreatingUser(false)
      })
  }

  let content

  if (isLoadingUser) {
    content = <Skeleton items={6} className="h-10 w-full" />
  } else if (loadingUserError) {
    content = <div>error</div>
  } else {
    content = data.map((user) => {
      return <UsersListItem key={user.id} user={user} />
    })
  }

  const btn = isCreatingUser ? "creating ..." : "+ Add User"

  return (
    <>
      <div className="flex flex-row justify-between items-center m-3">
        <h1 className="m-2 text-xl">Users</h1>
        {creatingUserError && "error occur"}
        <button onClick={handleUserAdd} disabled={isCreatingUser}>
          {btn}
        </button>
      </div>
      {content}
    </>
  )
}

export default UsersList
