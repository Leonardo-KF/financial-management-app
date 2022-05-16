import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './pages/App'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import {
  Auth0ProviderWithRedirectCallback,
  ProtectedRoute
} from '././auth/auth0'
import { Profile } from './pages/profile'
import { ApolloWrapper } from './lib/apollo'
import './styles/app.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Auth0ProviderWithRedirectCallback>
        <ApolloWrapper>
          <Routes>
            <Route path="/" element={<App />} />
            <Route
              path="/profile"
              element={<ProtectedRoute component={Profile} />}
            />
          </Routes>
        </ApolloWrapper>
      </Auth0ProviderWithRedirectCallback>
    </BrowserRouter>
  </React.StrictMode>
)
