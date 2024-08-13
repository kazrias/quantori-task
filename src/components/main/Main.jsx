import './Main.scss'
export const Main = ({children}) => {
  return (
    <>
      <div className='main'><div className="container">{children}</div></div>
    </>
  )
}
