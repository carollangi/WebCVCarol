import profilePicture from '../assets/profilepic.png'
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaSnapchat } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import '../styles/Header.css'

function Header() {
  return (
    <header>
        <div className="header-jumbotron">
            <img src={profilePicture}/>
            <h3>Carolina Pears Pamela Langi</h3>
            <p> Student - Content Creator - Artist</p>
            <div className="socialMedia">
                <a href=''><FaInstagramSquare /></a>
                <a href=''><FaTiktok /></a>
                <a href=''><FaFacebookF /></a>
                <a href=''><FaSnapchat /></a>
                <a href=''><FaYoutube /></a>
            </div>
        </div>
    </header>
  )
}

export default Header