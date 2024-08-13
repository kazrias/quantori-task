import './Error.scss'
import { Button } from '../button/Button'
export const Error = ({ setError }) => {
  return (
    <div className="error-wrapper">
      <div className='error'>
        <h2 className='error-title'>Error</h2>
        <p className='error-text'>Wrong username or password, try again!</p>
        <Button onClick={() => setError(false)}>OK</Button>
      </div>
    </div>
  )
}
