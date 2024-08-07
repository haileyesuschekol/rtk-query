import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { fetchUsers } from "../store"
const UsersList = () => {
  const dispatch = useDispatch()
  return useEffect(() => {
    dispatch(fetchUsers())
  }, [])
}

export default UsersList
