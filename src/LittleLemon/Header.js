import logo from './LL_logo.png';

function Header(props){
    return (
        <html className="Header">
            <div className="container">
                <img src={logo} className="App-logo" alt="logo"></img>
            </div>
        </html>)

}

export default Header;