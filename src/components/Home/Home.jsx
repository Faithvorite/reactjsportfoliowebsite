import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters/Animated'
// import LogoTitle from '../../assets/images/logo-s.png'
import doodleImg from '../../assets/images/paintingdoodle.png'
// import Logo from './Logo'
import './home.scss'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  const nameArray = ['F', 'a', 'i', 't', 'h', '!']
  const jobArray = [
    'W',
    'e',
    'b',
    ' ',
    'd',
    'e',
    'v',
    'e',
    'l',
    'o',
    'p',
    'e',
    'r',
    ',',
  ]

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, [])
  // setTimeout(() => {setLetterClass('text-animate-hover')}, 4000)
  return (
    <>
      <div className="container">
      <div className="logo-container">
        <img 
            src={doodleImg}
            alt="doodle"
            />
        <div className='logo-bg'></div>
        </div>
        <div className="text-zone">
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <span className={letterClass}> </span>
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m </span>
            {/* <img
              src={LogoTitle}
              alt="JavaScript Developer Name, Web Developer Name"
            /> */}
            <br />
           
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={13}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={22}
            />
          </h1>
          
          <h2>Front End Developer / JavaScript Expert / Content Creator / Artist / Writer</h2>
          <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link>
         
        </div>
     
        {/* <Logo /> */}
      </div>

      <Loader type="pacman" />
    </>
  )
}

export default Home