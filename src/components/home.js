import '../styles/home.css'
import {Link} from 'react-router-dom'

function Home(){
    return(
        <div className='banner'>
            <h1>WELCOME  TO  JAY'S  LUXURIOUS  HOTEL  APP</h1><br></br>
            <p>IT'S OUR DUTY TO SERVE YOU</p>
            <Link to="/Blog">
                <button className="btn-banner">VIEW OUR ROOMS</button>
            </Link>
            
        </div>
    )
}
export default Home