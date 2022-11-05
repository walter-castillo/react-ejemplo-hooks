import {useState, useContext} from 'react'
import UserContext from '../components/UserContext'

export default function Home() {
const {user, setUser} = useContext(UserContext)

const [inputValue, setInputValue] = useState("")

const onChange =(e)=>{
  setInputValue(e.target.value)
}
const cambiarUsername = () => { 
  if (inputValue.length >2) {
    setUser({
      ...user,
      username: inputValue
    })
  }
 }

return (
  <>
  <p>Usuarios: {user.username} </p>
    <input
    type="text"
    value={inputValue}
    onChange={onChange}
    />
    <button onClick= {cambiarUsername}>cambiar userName</button>
  </>
)
}
