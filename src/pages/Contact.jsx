import './PagesDefault.scss'
export const Contact = ({ email, phone }) => {
  return (
    email ? <div className="contacts">
      <h2>Your contacts:</h2>
      <span style={{display:'flex',gap:'10px'}}>Email: <a href="mailto:emily.johnson@x.dummyjson.com">{email}</a></span>
      <span style={{ display: 'flex', gap: '10px' }}>Phone: <a href="tel:+37493077298">{phone}</a></span>
    </div > : <div className="contacts">Login to get your contacts</div>

  )
}
