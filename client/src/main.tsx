import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import  { Auth0Provider } from '@auth0/auth0-react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { Profile } from "./pages/profile"

import './index.css'

console.log(import.meta.env.VITE_AUTH0_DOMAIN)


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Auth0Provider
        domain={import.meta.env.VITE_AUTH0_DOMAIN}
        clientId={import.meta.env.VITE_AUTH0_CLIENT_ID}
        redirectUri={window.location.origin}
        audience={import.meta.env.VITE_AUTH0_AUDIENCE}
        scope="read:current_user update:current_user_metadata"
      >
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/profile" element={<Profile/>} />
      </Routes>
      </Auth0Provider>
    </BrowserRouter>
  </React.StrictMode>
)
