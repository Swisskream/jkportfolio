import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import LittleLemon from './LittleLemon/App.js';
import Booking from './LittleLemon/Bookings/BookingPage.js';
import ConfirmedBooking from './LittleLemon/Bookings/ConfirmedBooking.js';

import Day2Day from './Day2Day/App.js';
import Day from './Day2Day/components/Day.js';
import DailyTasks from './Day2Day/components/DailyTasks.js';
import Wordle from './Day2Day/components/Wordle.js';

import GF_Recipes from './GF_Recipes/App.js';

import JK_HL from './JK_HomeLending/App.js';

const router = createBrowserRouter([
  {path: '/', element: <App /> },

  {path: '/LL', element: <LittleLemon /> },
  {path: '/booking', element: <Booking /> },
  {path: '/bookingConfirmed', element: <ConfirmedBooking /> },

  {path: '/Day2Day', element: <Day2Day /> },
  {path: '/Day', element: <Day /> },
  {path: '/dailyTasks', element: <DailyTasks /> },
  {path: '/wordle', element: <Wordle /> },

  {path: '/GF_Recipes', element: <GF_Recipes /> },

  {path: '/JK_HL', element: <JK_HL /> }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
