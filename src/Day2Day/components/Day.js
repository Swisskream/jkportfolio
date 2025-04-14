import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/Day.css';
import Goals from './Goals.js';
import Quote from './Quotes.js';


function Day(){
    return(
        <html className="Day">
            <Link to='/' className='portfolio'>Portfolio</Link>
            <header>
                <h1 id='D2D_header'>Day2Day</h1>
            </header>
            <body id='day'>
                <ul>
                    <button className="wordle">
                        <Link to="/wordle">Wordle</Link>
                    </button>
                    <button className='dailyTasks'>
                        <Link to="/dailyTasks">Daily Tasks</Link>
                    </button>
                </ul>
            <Quote />
            </body>
            <article>
                <Goals />
            </article>
        </html>
    );
}

export default Day;