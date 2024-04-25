import nombrelogo from '../assets/img/nombrelogo.png';
import "../index.css";

export function Welcome(){
    return(
        <div>
            <h1 className='font-family'>Welcome to</h1>
            <a href="nombrelogo"><img src={nombrelogo} alt="nombrelogo" /></a>
        </div>
    )
}