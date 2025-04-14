import React, {useState} from 'react';
import '../assets/Calendar.css';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
//import styled from 'styled-components';


function CalResults(){
    const today = new Date();

    const [calDate, setCalDate] = useState(today);

    const onChange = (calDate) => {
        setCalDate(calDate);
    };

    return(
        <div className='result-calendar'>
            <Calendar onChange={onChange} value={calDate}/>
        </div>
    );
}

export default CalResults;
