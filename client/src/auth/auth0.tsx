import React, { ComponentType } from 'react'
import { Auth0Provider, withAuthenticationRequired } from '@auth0/auth0-react'
import { useNavigate } from 'react-router-dom'

type ProtectedRouteProps = {
  component: ComponentType
}

type ChildrenComponents = {
  children: React.ReactElement
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  component,
  ...args
}) => {
  const Component = withAuthenticationRequired(component, args)
  return <Component />
}

export const Auth0ProviderWithRedirectCallback: React.FC<
  ChildrenComponents
> = ({ children, ...props }) => {
  const navigate = useNavigate()
  const onRedirectCallback = () => {
    navigate(window.location.pathname)
  }
  return (
    <Auth0Provider
      domain={import.meta.env.VITE_AUTH0_DOMAIN}
      clientId={import.meta.env.VITE_AUTH0_CLIENT_ID}
      redirectUri={window.location.origin}
      audience={import.meta.env.VITE_AUTH0_API_AUDIENCE}
      scope="read:current_user update:current_user_metadata"
      onRedirectCallback={onRedirectCallback}
      {...props}
    >
      {children}
    </Auth0Provider>
  )
}
