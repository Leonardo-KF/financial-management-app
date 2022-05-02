import React, { ComponentType } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import  { Auth0Provider, withAuthenticationRequired } from '@auth0/auth0-react';
import {
  BrowserRouter,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import { Profile } from "./pages/profile"
import './index.css'

type ProtectedRouteProps = {
  component: ComponentType;
}

type ChildrenComponents = {
  children: React.ReactElement;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ component, ...args }) => {
  const Component = withAuthenticationRequired(component, args);
  return <Component />;
};

const Auth0ProviderWithRedirectCallback:React.FC<ChildrenComponents> = ({ children, ...props }) => {
  const navigate = useNavigate();
  const onRedirectCallback = () => {
    navigate(window.location.pathname);
  };
  return (
    <Auth0Provider 
     domain={import.meta.env.VITE_AUTH0_DOMAIN}
     clientId={import.meta.env.VITE_AUTH0_CLIENT_ID}
     redirectUri={window.location.origin}
     audience={import.meta.env.VITE_AUTH0_AUDIENCE}
     scope="read:current_user update:current_user_metadata"
     onRedirectCallback={onRedirectCallback} {...props}>
      {children}
    </Auth0Provider>
  );
};


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Auth0ProviderWithRedirectCallback>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/profile" element={<ProtectedRoute component={Profile}/>} />
      </Routes>
      </Auth0ProviderWithRedirectCallback>
    </BrowserRouter>
  </React.StrictMode>
)
