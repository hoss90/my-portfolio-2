import "../Styles/Header.css"
import logo from "../Images/logo.png"

function Header(){
    return(
        <div className="header">
            <div className="navbar">
            <img src={logo} alt="logo" className="logo"/>
                <ol>
                    <li><a href="#home"> Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#contact">Contacts</a></li>
                </ol>
            </div>
        </div>
    )
}
export default Header