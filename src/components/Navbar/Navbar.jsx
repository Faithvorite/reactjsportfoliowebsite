import './navbar.scss'
import LogoS from '../../assets/images/logobrown.png'
import LogoSubtitle from '../../assets/images/logo_sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faLinkedin,
  faGithub,
  faYoutube,
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
        {/* <div>FAITH NGUYEN</div> */}
      </Link>
      <nav>
        <NavLink exact="true" activeclassname="active" to="/" onClick={()=>setOpen(!isOpen)}>
          <FontAwesomeIcon icon={faHome} color="#5A0000" />
        </NavLink>
        <NavLink activeclassname="active" className="about-link" to="/about" onClick={()=>setOpen(!isOpen)}>
          <FontAwesomeIcon icon={faUser} color="#5A0000" />
        </NavLink>
        <NavLink activeclassname="active" className="portfolio-link" to="/portfolio" onClick={()=>setOpen(!isOpen)}>
          <FontAwesomeIcon icon={faSuitcase} color="#5A0000" />
        </NavLink>
        <NavLink
          activeclassname="active"
          className="contact-link"
          to="/contact"
          onClick={()=>setOpen(!isOpen)}
        >
          <FontAwesomeIcon icon={faEnvelope} color="#5A0000" />
        </NavLink>
      </nav>
      <ul className="navul">
        <li>
          <a
            href="https://www.linkedin.com/in/faith-nguyen-7524a6245/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} color="brown" />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/Faithvorite"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} color="brown" />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/Faithvorite"
            rel="noreferrer"
            target="_blank"
          >
            <FontAwesomeIcon icon={faYoutube} color="brown" />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/ffartsy/" rel="noreferrer" target="_blank">
            <AiOutlineInstagram color="brown" />
          </a>
        </li>
      </ul>
    </div>
            </>
  )
}

export default Sidebar