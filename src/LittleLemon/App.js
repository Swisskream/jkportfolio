import React from 'react';
import './App.css';
import Nav from './Nav';
import Main from './Main';
import Article from './Article';
import Footer from './Footer';
import BookingPage from './Bookings/BookingPage';


function App() {
  return (
    <html className="App">
      <Nav />
      <Main />
      <Article />
      <Footer />
    </html>
  );
}

export default App;
