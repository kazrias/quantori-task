import './Login.scss'
import { Button } from '../../components/button/Button'
export const Login = ({ setLoginButtonClicked,userName, setUserName, userPass, setUserPass, handleCancelClick, setModalLoginClicked }) => {
  function handleModalLogin() {
    setModalLoginClicked(true)
    setLoginButtonClicked(false)
  }
  return (
    <div className="login-wrapper">
      <div className='login' >
        <h2 className='login-title'>Login</h2>
        <form className='login-form' onSubmit={(e) => { e.preventDefault(); handleModalLogin() }}>
          <div >
            <label>Username</label>
            <input
              type="text"
              onChange={e => setUserName(e.target.value)}
              required
              value={userName}
            />
          </div>
          <div >
            <label>Password</label>
            <input
              type="password"
              onChange={e => setUserPass(e.target.value)}
              required
              value={userPass}
            />
          </div>
          <div className="login-buttons">
            <Button onClick={handleCancelClick} type='button'>Cancel</Button>
            <Button styling={'main'} type='submit'>Login</Button>
          </div>
        </form>
      </div>
    </div>
  )
}
