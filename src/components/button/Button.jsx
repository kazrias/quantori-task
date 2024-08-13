import './Button.scss'
export const Button = ({ onClick, styling, children, type }) => {
  return (
    <button type={type} onClick={onClick} className={'button button--' + styling}>
      {children}
    </button>
  )
}
