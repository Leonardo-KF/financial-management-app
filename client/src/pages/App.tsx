import { gql } from '@apollo/client'
import { useAuth0 } from '@auth0/auth0-react'
import { useNavigate } from 'react-router-dom'
import { Header } from '../components/Header'

function App() {
  const navigate = useNavigate()
  const { loginWithRedirect, logout } = useAuth0()

  return (
    <>
      <Header />
      <div className="App">
        <h1>hello world</h1>
        <button
          onClick={() => {
            loginWithRedirect()
          }}
        >
          {' '}
          login{' '}
        </button>
        <button
          onClick={() => {
            logout()
          }}
        >
          {' '}
          logout{' '}
        </button>
        <button onClick={() => navigate('/profile')}>profile</button>
      </div>
    </>
  )
}

export default App
