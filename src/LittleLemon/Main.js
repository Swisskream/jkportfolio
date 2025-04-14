import logo from './restauranfood.jpg'
import salad from './greek salad.jpg'
import bruschetta from './bruschetta.jpg'
import lemon_dessert from './lemon dessert.jpg'
import {Link} from "react-router-dom";

function Main(props){
    return (
        <html className="LL_Main">
            <div className="block1">
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <p>Little Lemon is a charming neighborhood bistro that serves simple food and classic cocktails in a lively but casual environment. The restaurant features a locally sourced menu with daily specials.</p>
                <button>
                    <Link to="/booking">Reserve a Table</Link>
                </button>
                <img src={logo} className="App-logo2" alt="logo2"></img>
            </div>
            <div className="block2">
                <h2>This weeks Specials!</h2>
                <button>Online Menu</button>
                <ul>
                    <li>
                        <img src={salad} className='plate1' alt="plate1"></img>
                        <h3>Greek Salad</h3>
                        <h3>$10.00</h3>
                        <p>Famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese.</p>
                        <h3>Order a delivery</h3>
                    </li>
                    <li>
                        <img src={bruschetta} className='plate2' alt="plate2"></img>
                        <h3>Bruschetta</h3>
                        <h3>$5.00</h3>
                        <p>Our Bruschetta is made from grilled break that has been smeared with garlic and seasoned with salt and olive oil.</p>
                        <h3>Order a delivery</h3>
                    </li>
                    <li>
                        <img src={lemon_dessert} className='plate3' alt="plate3"></img>
                        <h3>Lemon Dessert</h3>
                        <h3>$7.00</h3>
                        <p>This comes straight from grandma’s recipe book, every last ingredient has been source and is as authentic as can be imagined.</p>
                        <h3>Order a delivery</h3>
                    </li>
                </ul>
            </div>
            <div className="block3">
                <h2>Testimonials</h2>
                <ul>
                    <li>
                        <h3>Rating: </h3>
                        <p>4.5/5</p>
                        <p>Excellent food and service! </p>
                    </li>
                    <li>
                        <h3>Rating: </h3>
                        <p>5/5</p>
                        <p>Beautiful restaurant </p>
                    </li>
                    <li>
                        <h3>Rating: </h3>
                        <p>4/5</p>
                        <p>Lovely meal</p>
                    </li>
                </ul>
            </div>
        </html>)

}

export default Main;