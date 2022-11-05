import { useContext} from 'react'
import UserContext from '../components/UserContext'


export default function About() {
  const {user} = useContext(UserContext)
  return (
    <>
      <p>User: {user.username}</p>
      <p>email: {user.email}</p>
    </>
  )
}
