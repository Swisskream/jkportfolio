import logo from './../LL_logo.png';
import homeicon from './../home-icon.png';
import { Link } from 'react-router-dom';
import './BookingCSS.css';
import BookingForm from './BookingForm';

function BookingPage(props){
    return (
        <html className="bookingheader">
            <header className='nav-menu'>
                <button aria-label='On Click'>
                    <Link to='/'><img src={homeicon} className='home' alt='home'></img></Link>
                </button>
                <img src={logo} className="App-logo" alt="logo"></img>
            </header>
            <h1>Reservation</h1>
            <BookingForm />
        </html>
    )
}

export default BookingPage;