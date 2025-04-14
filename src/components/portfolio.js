import React from 'react';
import '../assets/portfolio.css';
import { Link } from 'react-router-dom';

import Jacob from '../photos/selfie.jpg';
import littlelemon from '../photos/LittleLemon.PNG';
import Day2Day from '../photos/Day2Day.PNG';
import JK_HL from '../photos/JK_HL.PNG';

function Portfolio() {
    return(
        <hmtl className='jk_main' >
            <header className='header_main' >
                <h1>Welcome!</h1>
            </header>
            <body className='body_main' >
                <div id='intro'>
                    <h2>Jacob Kramer</h2>
                    <p>I am a Front-End Developer with a strong foundation in JavaScript, React, HTML, CSS, Git, and Figma, complemented by hands-on project experience and a keen eye for creating user-friendly, responsive web applications. I have successfully earned certifications in Meta Front-End Development and Web Development using JavaScript on CodeChef, which have enhanced my ability to build and maintain intuitive, aesthetically pleasing websites.</p>

                    <p>Currently, I work as a Participant Relationship Manager at Morgan Stanley (since October 2024), where I leverage my technical and communication skills to strengthen client relationships and provide tailored solutions. In my previous role as a Time and Expense Operations Supervisor at TEKsystems, I led cross-functional projects, collaborated with multiple teams, and enhanced processes—skills that translate well into managing complex development tasks and working in agile environments.</p>

                    <p>My technical knowledge is complemented by my ability to work effectively in team settings, adapt to change, and maintain a positive, solution-oriented mindset. I am passionate about building engaging digital experiences and am eager to apply my front-end expertise to innovative projects that prioritize both functionality and design.</p>
                </div>
                <img src={Jacob} alt='Jacob' id='jacob' />
            </body>
            <article className='art_main' >
                <div id='projects'>
                    <h2>Projects</h2>
                    <ul>
                        <li>
                            <div className='proj_intro'>
                                <h3>Little Lemon restaurant</h3>
                                <p>Enjoy this charming neighborhood bistro and reserve a table!</p>
                                <button>
                                    <Link to='/LL'>Check it out</Link>
                                </button>
                            </div>
                            <img src={littlelemon} alt='littlelemon' id='littlelemon' />
                        </li>
                        <li>
                            <div className='proj_intro'>
                                <h3>JK Home Lending</h3>
                                <p>Looking to finance a home, refinance, or discuss the best interest rates available? Take a look at what JK Home Lending can do for you.</p>
                                <button>
                                    <Link to='/JK_HL'>Check it out</Link>
                                </button>
                            </div>
                            <img src={JK_HL} alt='JK_HL' id='JK_HL' />
                        </li>
                        <li>
                            <div className='proj_intro'>
                                <h3>Day2Day</h3>
                                <p>Spend some time to focus on your daily tasks, goals, and enjoy a game of Wordle.</p>
                                <button>
                                    <Link to='/Day2Day'>Check it out</Link>
                                </button>
                            </div>
                            <img src={Day2Day} alt='Day2Day' id='Day2Day' />
                        </li>
                    </ul>
                </div>
                <div id='skills'>
                    <h2>Skills</h2>
                    <div id='skill_icons'>
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg" />
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original-wordmark.svg" />
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original-wordmark.svg" />
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/npm/npm-original-wordmark.svg" />
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original-wordmark.svg" />
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jquery/jquery-original-wordmark.svg" />
                    </div>
                </div>
            </article>
            <footer className='footer_main' >
                <h2>Contact</h2>
                <ul>
                    <li>Email: jacobkramer50@gmail.com</li>
                </ul>
            </footer>
        </hmtl>
    );
}

export default Portfolio;