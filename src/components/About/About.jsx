import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters/Animated'
import './about.scss'
import Slider from '../Slider/Slider';
const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])


  return (
    <>
      <div className="about-page">
        <div className="abg"></div>
        <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
        
        <div className="about-text-zone">
        <Slider className="aboutslider"/>
          <div className="aboutp">
          <div className="aboutheader">Career Endeavors</div>
          <p>
     I graduated Cum Laude from UT Austin in 2019, with a B.S. in English and minor in Creative Writing. While English and art have long been my outlets for expression, in 2021 I began studying web development as well. Despite changes in my career path, my goal in life has remained the same - to better my ability to create and communicate.
          </p>
          <hr></hr>
          <div className="aboutheader">Personal Pursuits</div>
          <p>
            I am a writer, artist, and programmer. 
          </p>
          
          </div>
        </div>

       
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About