import { useAuth0 } from "@auth0/auth0-react"


function App() {
 
  const { loginWithRedirect } = useAuth0();

  return (
    <div className="App">
      <h1>hello world</h1>
      <button onClick={() => {loginWithRedirect()}}> login </button>
    </div>
  )
}

export default App
