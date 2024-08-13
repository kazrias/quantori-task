import './Header.scss'
import { Profile } from './profile/Profile'
import { Navigation } from './navigation/Navigation'
import { Button } from '../button/Button.jsx'
import { Login } from '../login/Login.jsx'
import { useState } from 'react'
export const Header = ({ userEmail, setUserEmail, userPass, setUserPass }) => {
  const [loginIsClicked, setLoginIsClicked] = useState(false);
  function handleLoginClick() {
    setLoginIsClicked(true)
  }
  function handleCancelClick() {
    setUserEmail('')
    setUserPass('')
    setLoginIsClicked(false)
  }
  return (
    <header className='header'>
      <div className='container'>
        <div className="header__inner">
          <div className="header__inner-profile">
            <Profile />
          </div>
          <div className="header__inner-nav">
            <Navigation />
            <Button onClick={handleLoginClick} styling={'main'}>Login</Button>
          </div>
        </div>
      </div>
      {loginIsClicked && <Login
        userEmail={userEmail} setUserEmail={setUserEmail}
        userPass={userPass} setUserPass={setUserPass}
        handleCancelClick={handleCancelClick} />}
    </header>
  )
}
