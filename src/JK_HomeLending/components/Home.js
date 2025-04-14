import React from 'react';
import '../assets/Home.css';
import {Link} from 'react-router-dom';

import fam_house  from '../pictures/familyhouse.jpg';
import nice_house from '../pictures/nice_house.jpeg';
import man from '../pictures/prof_man.jpg';

import review1 from '../pictures/review_1.PNG';
import review2 from '../pictures/review_2.PNG';
import review3 from '../pictures/review_3.PNG';
import review4 from '../pictures/review_4.PNG';

function Home(){

    return(
        <html className='JK_home'>
            <nav className='home_nav'>
                <Link to='/' className='portfolio'>Portfolio</Link>
                <ul>
                    <li><a href=''>Services</a></li>
                    <li><a href=''>Knowledge</a></li>
                    <li><a href=''>Reviews</a></li>
                    <li><a href=''>Contact</a></li>
                </ul>
            </nav>
            <header className='home_header'>
                <h1 id='title'>JK Home Lending</h1>
                <img src={fam_house} alt='fam_house' id='fam_house'></img>
                <img src={nice_house} alt='nice_house' id='nice_house'></img>
            </header>
            <body className='home_body'>
                <p id='home_p'>Are you looking for the best rate on your new home? Are you looking for someone you can trust with over 20 years of experience?
                    Well you're in luck because I can personally garauntee the best rates in the entire valley!</p>
                <div id='man_buttons'>
                    <img src={man} alt='man' id='man_john'></img>
                    <div id='services'>
                        <h2>Services:</h2>
                        <ul id='home_services'>
                            <li><button href=''>Residential Mortage Expert</button></li>
                            <li><button>Refinance Specialist</button></li>
                            <li><button>Best Loan Options</button></li>
                            <li><button>Credit Profile Assitance</button></li>
                        </ul>
                    </div>
                </div>
            </body>
            <article className='home_article'>
                <h2>Reviews:</h2>
                <div className='reviews'>
                    <img src={review1} alt='review1' id='review1' />
                    <img src={review2} alt='review2' id='review2' />
                    <img src={review3} alt='review3' id='review3' />
                    <img src={review4} alt='review4' id='review4' />
                </div>
            </article>
            <footer className='home_footer'>
                <h3 id='contact'>Contact Info:</h3>
                <ul>
                    <li>Email: jk@gmail.com</li>
                    <li>Phone: (123)456-7890</li>
                </ul>
            </footer>
        </html>
    );
}

export default Home;