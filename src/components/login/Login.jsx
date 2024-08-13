import './Login.scss'
import { Button } from '../../components/button/Button'
export const Login = ({ userEmail, setUserEmail, userPass, setUserPass, handleCancelClick }) => {
  return (
    <div className="login-wrapper">
      <div className='login' >
        <h2 className='login-title'>Login</h2>
        <form className='login-form'>
          <div >
            <label>Email</label>
            <input
              type="email"
              onChange={e => setUserEmail(e.target.value)}
              required
              value={userEmail}
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
