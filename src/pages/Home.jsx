import './PagesDefault.scss'
export const Home = ({ firstName, lastName }) => {
  return (
    firstName ? <div className="home"> Welcome back {firstName} {lastName} ! </div > : <div className="home">Please login to use our web page!</div>
  )
}
