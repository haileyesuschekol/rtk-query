import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchUsers, addUser } from "../store"
import Skeleton from "./Skeleton"

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

  if (isLoadingUser) {
    return <Skeleton items={3} className="h-10 w-full" />
  }
  if (loadingUserError) {
    return <div>error</div>
  }

  const renderedUsers = data.map((user) => {
    return (
      <div key={user.id} className="mb-2 border rounded">
        <div className="flex p-2 justify-between items-center cursor-pointer">
          {user.name}
        </div>
      </div>
    )
  })

  const btn = isCreatingUser ? "creating ..." : "+ Add User"

  return (
    <>
      <div className="flex flex-row justify-between m-3">
        <h1 className="m-2 text-xl">Users</h1>
        {creatingUserError && "error occur"}
        <button onClick={handleUserAdd}>{btn}</button>
      </div>
      {renderedUsers}
    </>
  )
}

export default UsersList
