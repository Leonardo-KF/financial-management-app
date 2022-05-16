import {
  ApolloClient,
  ApolloProvider,
  createHttpLink,
  InMemoryCache
} from '@apollo/client'
import { setContext } from '@apollo/client/link/context'
import { useAuth0 } from '@auth0/auth0-react'
import { useEffect, useState } from 'react'

type ChildrenComponents = {
  children: React.ReactElement
}

export const ApolloWrapper: React.FC<ChildrenComponents> = ({ children }) => {
  const { isAuthenticated, getAccessTokenSilently } = useAuth0()
  const [token, setToken] = useState<string>('')
  console.log(import.meta.env.VITE_AUTH0_API_AUDIENCE)
  const getToken = async () => {
    const token = isAuthenticated
      ? await getAccessTokenSilently({
          audience: import.meta.env.VITE_AUTH0_API_AUDIENCE,
          scope: 'read:current_user'
        })
      : ''
    setToken(token)
  }

  useEffect(() => {
    getToken()
  }, [getAccessTokenSilently, isAuthenticated])

  console.log(token)
  const httpLink = createHttpLink({
    uri: 'http://localhost:3001/graphql',
    fetch
  })

  const authLink = setContext((request, { headers, ...rest }) => {
    if (token === '') {
      return { headers, ...rest }
    }
    return {
      ...rest,
      headers: {
        ...headers,
        authorization: `Bearer ${token}`
      }
    }
  })

  const cache = new InMemoryCache()

  const apolloClient = new ApolloClient({
    cache,
    link: authLink.concat(httpLink)
  })

  return <ApolloProvider client={apolloClient}>{children}</ApolloProvider>
}
