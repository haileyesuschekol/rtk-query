import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchUsers } from "../store"
const UsersList = () => {
  const dispatch = useDispatch()

  const { isLoading, data, error } = useSelector((state) => {
    return state.users
  })

  useEffect(() => {
    dispatch(fetchUsers())
  }, [])

  if (isLoading) {
    return <div>loading...</div>
  }
  if (error) {
    return <div>error</div>
  }

  return (
    <div>
      <h2>data</h2>
      {data.length}
    </div>
  )
}

export default UsersList
