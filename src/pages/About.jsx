import './PagesDefault.scss'
export const About = ({ age, gender, birthDate, bloodGroup, height, weight, eyeColor, hair, address }) => {
  return (
    birthDate ? <div className="about">
      <h2>Here is information about you!</h2>
      <p>Age: {age}</p>
      <p>Gender: {gender}</p>
      <p>Birth Date: {birthDate}</p>
      <p>Blood Group: {bloodGroup}</p>
      <p>Height: {height}</p>
      <p>Weight: {weight}</p>
      <p>Eye Color: {eyeColor}</p>
      <p>Hair: {hair.color} {hair.type}</p>

    </div> : <div className='about'>Login to read about yourself!</div>
  )
}
