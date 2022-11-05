import {useState} from 'react'
import RoutesApp from "./routes/RoutesApp";
import UserContext from "./components/UserContext";

function App() {
  const [user, setUser] = useState({
    id: '123123',
    username:'username1',
    email:"email.com"
  })

  return (
    <UserContext.Provider value={{ user, setUser }}>
      
      <RoutesApp />
       
    </UserContext.Provider>
  );
}

export default App
