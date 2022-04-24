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

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Auth0Provider
      domain='dev-g30nhyh1.us.auth0.com'
      clientId='g7sjNHAeAppFqbJbdCQNQSi0StAjXdcg'
      redirectUri={window.location.origin}
      audience='https://dev-g30nhyh1.us.auth0.com/api/v2/'
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
