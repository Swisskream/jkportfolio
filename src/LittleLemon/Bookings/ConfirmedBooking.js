import { Link } from 'react-router-dom';
import './BookingCSS.css';
import restaurant from './../restaurant.jpg';

function ConfirmedBooking(props){
    return(
        <html className='confirmedBooking'>
            <h2>Your reservation has been confirmed!</h2>
            <img src={restaurant} className='restaurant' alt='restaurant'></img>
            <button>
                <Link to="/">Return to Home</Link>
            </button>
        </html>
    )
}

export default ConfirmedBooking;