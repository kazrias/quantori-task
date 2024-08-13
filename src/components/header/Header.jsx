import './Header.scss'
import { Profile } from './profile/Profile'
import { Navigation } from './navigation/Navigation'
import { Button } from '../button/Button.jsx'
export const Header = () => {
  return (
    <header className='header'>
      <div className='container'>
        <div className="header__inner">
          <div className="header__inner-profile">
            <Profile />
          </div>
          <div className="header__inner-nav">
            <Navigation />
            <Button />
          </div>
        </div>
      </div>
    </header>
  )
}
