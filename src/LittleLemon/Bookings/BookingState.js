import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

let initialTimes = [
    { id: 0, time: '5:00pm'},
    { id: 1, time: '6:00pm'},
    { id: 2, time: '7:00pm'},
    { id: 3, time: '8:00pm'},
    { id: 4, time: '9:00pm'},
    { id: 5, time: '10:00pm'},
];

function AvailableTimes(props) {
    const [times, setTimes] = useState(initialTimes);

    const removeTime = async (id) => {
        try {
            const response = await fetch(`http://localhost:3000/booking${id}`, {
                method: 'DELETE',
            });

            if (response.ok) {
                setTimes(prevTimes => prevTimes.filter(time => time.id !== id));
                console.log('${id} is now reserved');
            } else {
                console.error('Failed to reserve time');
            }
        } catch (error) {
            console.error('Error reserving time:', error);
        }
    };

    return (
        <select id="res-time" required>
            {times.map(atime => (
                <option key={atime.id}>
                    {atime.time}
                    <option onClick={() => {
                        removeTime(
                            times.filter(a =>
                                a.id !== atime.id
                            )
                        );
                    }}>
                    </option>
                </option>
            )
            )}
        </select>
    )
};
/*setTimes( times.filter (a => a.id !== atime.id )); = create an array that consists of those
times whose IDs are different from atime.id. It should filter that time out of the array*/

fetch('http://localhost:3000/booking')
    .then(response => response.json())
    .then(response => response.map(time => time.AvailableTimes))
    .then(AvailableTimes => console.log(AvailableTimes));
    

function Reserved(props) {
    const [reserve, setReserve] = useState('#ceb32d');

    /*const handleClick = () => {
    setReserve()
    }*/

    return (
        <button className='reserved'
        /*onClick={handleClick}
        style={{backgroundColor:`${reserve}`}}*/>
            <Link to="/bookingConfirmed">Reserve</Link>
        </button>
    )
}

export {Reserved, AvailableTimes};