import '../assets/Quotes.css';
import React, { useState } from 'react';

function Quote() {
    const [quote, setQuote] = useState('');

    const fetchQuote = async () => {
        const url = 'https://quotes-inspirational-quotes-motivational-quotes.p.rapidapi.com/quote?token=ipworld.info';
        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': '109d590e84mshb3f74934c3b15fdp1c7249jsnc14080fdc967',
                'x-rapidapi-host': 'quotes-inspirational-quotes-motivational-quotes.p.rapidapi.com'
            }
        };

        try {
            const response = await fetch(url, options);
            const data = await response.json();
            setQuote(data.text);
        } catch (error) {
            console.error("Error:", error.message);
        }
    };

    const handleQuote = () => {
        fetchQuote();
    };

    return (
        <div className='DQ'>
            <h3 id='dailyQuote'>Daily Quote:</h3>
            <div>
                <p id='quote'>{quote}</p>
                <button onClick={handleQuote} id='quoteButton'>Get Quote</button>
            </div>
        </div>
    );
}

export default Quote;