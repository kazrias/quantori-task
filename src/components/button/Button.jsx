import './Button.scss'
export const Button = ({ children, type }) => {
  return (
    <div className={'button button--' + type}>
      {children}
    </div>
  )
}
