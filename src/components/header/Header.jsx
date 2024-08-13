import './Header.scss'
import { Profile } from './profile/Profile'
import { Navigation } from './navigation/Navigation'
import { Button } from '../button/Button.jsx'
import { Login } from '../login/Login.jsx'
import { useState } from 'react'
export const Header = ({ handleLogout, user, image, loginButtonClicked, setLoginButtonClicked, userName, setUserName, userPass, setUserPass, setModalLoginClicked }) => {
  function handleLoginClick() {
    setLoginButtonClicked(true)
  }
  function handleCancelClick() {
    setUserName('')
    setUserPass('')
    setLoginButtonClicked(false)
  }
  return (
    <header className='header'>
      <div className='container'>
        <div className="header__inner">
          <div className="header__inner-profile">
            <Profile image={image} />
          </div>
          <div className="header__inner-nav">
            <Navigation />
            {user.id ? <Button onClick={handleLogout}>LogOut</Button> : <Button onClick={handleLoginClick} styling={'main'}>Login</Button>}
          </div>
        </div>
      </div>
      {loginButtonClicked && <Login
        userName={userName} setUserName={setUserName}
        userPass={userPass} setUserPass={setUserPass}
        setModalLoginClicked={setModalLoginClicked}
        setLoginButtonClicked={setLoginButtonClicked}
        handleCancelClick={handleCancelClick} />}
    </header>
  )
}
