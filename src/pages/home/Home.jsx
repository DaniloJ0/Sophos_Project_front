import homeImage from '../../img/JovenU.jpg'
import './home.css'
// const homeImage = "https://images.pexels.com/photos/6147080/pexels-photo-6147080.jpeg?cs=srgb&dl=pexels-keira-burton-6147080.jpg&fm=jpg&_gl=1*15bql3k*_ga*Mzk0MDEyMTM5LjE2NjM1NTYxMDE.*_ga_8JE65Q40S6*MTY2NzAxNzQ2Mi4zLjEuMTY2NzAxODY3MC4wLjAuMA.."

function Home() {
  return (
    <>
      <div>
        <img src={homeImage} alt="FondoHome" className='homePhoto'/>
      </div>
    </>
  )
}

export default Home