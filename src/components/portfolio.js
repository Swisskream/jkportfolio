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
                    <p>Cloud enthusiast with hands-on foundational knowledge of AWS cloud services, recently certified as an AWS Certified Cloud Practitioner. 
                        I bring a strong background in operational leadership, client management, and cross-team collaboration, with a growing skill set in cloud 
                        infrastructure, security, and cost optimization. I have the ability to quickly adapt to new technologies and thrive in dynamic environments. 
                        I am experienced in managing complex processes, streamlining workflows, and supporting technical solutions with a business-first mindset. Currently, I am 
                        focused on building expertise in cloud architecture, deployment, and monitoring solutions using AWS. And very eager to contribute to cloud transformation 
                        initiatives as an entry-level Cloud Engineer.
                    </p>
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
                        <img src='https://d1.awsstatic.com/certification/badges/AWS-Certified-AI-Practitioner_badge_300x300.85cea45137696692de99a72934f6ddb81f82fc12.png' />
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original-wordmark.svg" />
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg" />
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original-wordmark.svg" />
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original-wordmark.svg" />
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/npm/npm-original-wordmark.svg" /> 
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