import { useAuth0 } from '@auth0/auth0-react'
import { HeaderDiv, Logo, HeaderText } from '../styles/HeaderStyles'
import logo from '../public/images/logo.png'

export function Header() {
  return (
    <HeaderDiv>
      <Logo
        // src="https://w7.pngwing.com/pngs/678/3/png-transparent-dollar-sign-dollar-sign-text-logo-number.png"
        src={logo}
        alt="logo"
      />
      <HeaderText>Personal Finances</HeaderText>
    </HeaderDiv>
  )
}
