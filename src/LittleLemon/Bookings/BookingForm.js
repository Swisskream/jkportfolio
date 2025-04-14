import { Link } from 'react-router-dom';
import {Reserved, AvailableTimes} from './BookingState'


function BookingForm(props) {
    return (
        <form className='bookingform'>
            <input type='text' placeholder="Name" required />
                <p></p>
            <input type='tel' placeholder="Phone Number" pattern='[0-9]{3}-[0-9]{3}-[0-9]{4}' required />
                <p>Format: 123-456-7890</p>
            <input type="email" placeholder="Email" required/>
                <p></p>
            <input type="date" placeholder="Date" required />
                <p>Date of Reservation</p>
            <AvailableTimes />
                <p>Time of Reservation</p>
            <input oninput="NumberOfGuests" type="number" placeholder="Number of Guests" min={1} max={15} required />
                <p>Maxium of 15</p>
            <input type="text" placeholder="Occasion" />
                <p></p>
            <textarea cols={10} rows={5} placeholder='Any additional notes...' />
                <p></p>
            <Reserved />
        </form>
    )
}

export default BookingForm;