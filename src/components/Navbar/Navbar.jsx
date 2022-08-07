import './navbar.scss'
import LogoS from '../../assets/images/logobrown.png'
import LogoSubtitle from '../../assets/images/logo_sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faLinkedin,
  faGithub,
  faYoutube,
  FaInstagram,
  faSkype,
} from '@fortawesome/free-brands-svg-icons'
import { AiOutlineInstagram } from "react-icons/ai";


import { faHome, faUser, faEnvelope, faSuitcase } from '@fortawesome/free-solid-svg-icons'
import { Link, NavLink } from 'react-router-dom'
import {Squash as Hamburger} from 'hamburger-react'
import { useState } from 'react'


const Sidebar = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
    <Hamburger className="hamburger-react" toggled={isOpen} toggle={setOpen} />
    <div className={isOpen ? "nav-bar-active" : "nav-bar"}>
      <Link className="logo" to="/">
        <img src={LogoS} alt="Logo" />
        <img className="sub-logo" src={LogoSubtitle} alt="FN" />
      </Link>
      <nav>
        <NavLink exact="true" activeclassname="active" to="/" onClick={()=>setOpen(!isOpen)}>
          <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
        </NavLink>
        <NavLink activeclassname="active" className="about-link" to="/about" onClick={()=>setOpen(!isOpen)}>
          <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
        </NavLink>
        <NavLink activeclassname="active" className="portfolio-link" to="/portfolio" onClick={()=>setOpen(!isOpen)}>
          <FontAwesomeIcon icon={faSuitcase} color="#4d4d4e" />
        </NavLink>
        <NavLink
          activeclassname="active"
          className="contact-link"
          to="/contact"
          onClick={()=>setOpen(!isOpen)}
        >
          <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
        </NavLink>
      </nav>
      <ul className="navul">
        <li>
          <a
            href="https://www.linkedin.com/in/faith-nguyen-7524a6245/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/Faithvorite"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/Faithvorite"
            rel="noreferrer"
            target="_blank"
          >
            <FontAwesomeIcon icon={faYoutube} color="#000000" />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/ffartsy/" rel="noreferrer" target="_blank">
            <AiOutlineInstagram color="black" />
          </a>
        </li>
      </ul>
    </div>
            </>
  )
}

export default Sidebar