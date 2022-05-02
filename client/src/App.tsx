import { useAuth0 } from "@auth0/auth0-react"


function App() {
 
  const { loginWithRedirect, logout } = useAuth0();

  return (
    <div className="App">
      <h1>hello world</h1>
      <button onClick={() => {loginWithRedirect()}}> login </button>
      <button onClick={() => {logout()}}> logout </button>
    </div>
  )
}

export default App
