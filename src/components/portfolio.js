import React from 'react';
import '../assets/portfolio.css';
import { Link } from 'react-router-dom';

import Views from './view-counter.js';

import Jacob from '../photos/selfie.jpg';
import littlelemon from '../photos/LittleLemon.PNG';
import Day2Day from '../photos/Day2Day.PNG';
import GF from '../photos/GF Recipes screenshot.png';
import BT from '../photos/BT_example.png';
import PR from '../photos/PulseRead-light.png';

import SAA_badge from '../photos/SAA-badge.png';

function Portfolio() {
    return(
        <html className='jk_main' >
            <header className='header_main' >
                <h1>Welcome!</h1>
            </header>
            <body className='body_main' >
                <div id='intro'>
                    <h2>Jacob Kramer</h2>
                    <p>Cloud enthusiast with hands-on foundational knowledge of AWS cloud services, recently certified as an AWS Certified Solutions Architect – Associate 
                        and AWS Certified Cloud Practitioner. I bring a strong background in operational leadership, client management, and cross-team collaboration, with a 
                        growing skill set in cloud infrastructure, security, and cost optimization. I have the ability to quickly adapt to new technologies and thrive 
                        in dynamic environments. I am experienced in managing complex processes, streamlining workflows, and supporting technical solutions with a 
                        business-first mindset. Currently, I am focused on building expertise in cloud architecture, deployment, and monitoring solutions using AWS. I am very 
                        eager to contribute to cloud transformation initiatives as a Cloud Engineer.
                    </p>
                </div>
                <img src={Jacob} alt='Jacob' id='jacob' />
            </body>
            <article className='art_main' >
                <div id='projects'>
                    <div id='proj-heading'>
                        <h2>Projects</h2>
                        <Views />
                    </div>
                    <ul>
                        <li>
                            <div className='proj_intro'>
                                <h3>PulseRead</h3>
                                <p>PulseRead is an AI-powered app that transforms lengthy articles, reviews, and documents into concise, easy-to-digest summaries—giving you the key insights in seconds.
                                </p>
                                <button className='proj_button'>
                                    <Link to='/PulseRead'>Check it out</Link>
                                </button>
                            </div>
                            <img src={PR} alt='pulseread' id='pulseread' />
                        </li>
                        <li>
                            <div className='proj_intro'>
                                <h3>JK Budget Tracker</h3>
                                <p>Track your income and expenses with this simple budget tracker app. 
                                    It allows you to add, edit, and delete transactions, and view your balance.
                                </p>
                                <button className='proj_button'>
                                    <Link to='/budgettracker'>Check it out</Link>
                                </button>
                            </div>
                            <img src={BT} alt='budgettracker' id='budgettracker' />
                        </li>
                        <li>
                            <div className='proj_intro'>
                                <h3>Gluten-Free Recipes</h3>
                                <p>As someone with celiac disease I understand it can be easy to eat the same meals over and over with limited variety.
                                    This app is designed to help you find new gluten-free recipes that are easy to make and delicious!
                                </p>
                                <button className='proj_button'>
                                    <Link to='/GF_Recipes'>Check it out</Link>
                                </button>
                            </div>
                            <img src={GF} alt='GF' id='GF' />
                        </li>
                        <li>
                            <div className='proj_intro'>
                                <h3>Little Lemon restaurant</h3>
                                <p>Enjoy this charming neighborhood bistro and reserve a table!</p>
                                <button className='proj_button'>
                                    <Link to='/LL'>Check it out</Link>
                                </button>
                            </div>
                            <img src={littlelemon} alt='littlelemon' id='littlelemon' />
                        </li>
                        <li>
                            <div className='proj_intro'>
                                <h3>Day2Day</h3>
                                <p>Spend some time to focus on your daily tasks, goals, and enjoy a game of Wordle.</p>
                                <button className='proj_button'>
                                    <Link to='/Day2Day'>Check it out</Link>
                                </button>
                            </div>
                            <img src={Day2Day} alt='Day2Day' id='Day2Day' />
                        </li>
                    </ul>
                </div>
                <div id='skills'>
                    <h2>Certifications and skills</h2>
                    <div id='skill_icons'>
                        <img src={SAA_badge} />
                        <img src='https://d1.awsstatic.com/training-and-certification/certification-badges/AWS-Certified-Cloud-Practitioner_badge.634f8a21af2e0e956ed8905a72366146ba22b74c.png' />
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
        </html>
    );
}

export default Portfolio;