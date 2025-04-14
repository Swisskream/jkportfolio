import LL from './LL_footer.png'

function Footer(props){
    return (
        <html className="LL_Footer">
            <img src={LL} className='LLimage'></img>
            <ul>
                <li>
                    <h2>Navigation</h2>
                    <p><a href="#">Home</a></p>
                    <p><a href="#">About</a></p>
                    <p><a href="#">Menu</a></p>
                    <p><a href="#">Reservations</a></p>
                    <p><a href="#">Order Online</a></p>
                    <p><a href="#">Login</a></p>
                </li>
                <li>
                    <h2>Contact</h2>
                    <p><a href="#">Address</a></p>
                    <p><a href="#">Phone number</a></p>
                    <p><a href="#">Email</a></p>
                </li>
                <li>
                    <h2>Social Media</h2>
                    <p><a href="#">Facebook link</a></p>
                    <p><a href="#">Instagram link</a></p>
                    <p><a href="#">Twitter link</a></p>
                </li>
            </ul>
        </html>)

}

export default Footer;