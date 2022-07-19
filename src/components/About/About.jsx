import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters/Animated'
import './about.scss'
import Me from "../../assets/images/me.jpg";
import meUT from "../../assets/images/meUT.jpg"
import meUT2 from "../../assets/images/meUT2.jpg"
import mepaint from "../../assets/images/mepainting.jpg"
import Slider from '../Slider/Slider';
const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

    const [index,setIndex]= useState(0);
    const images = [
        Me,
        mepaint,
        meUT,
        meUT2
        
        
    ];

    const handleArrow = (direction) => {
        if(direction==="l") {
            setIndex(index !== 0 ? index-1 : 2)
        } if (direction === "r") {
            setIndex(index !== 2 ? index + 1 : 0)
        }
    }

  return (
    <>
      <div className="about-page">
        <div className="abg"></div>
        <Slider />
        <div className="about-text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <div className="aboutp">

          <p>
     Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati totam est rem quis eius illo deserunt, quisquam odio ab, tempore dicta nam reprehenderit sequi ut vitae non temporibus nisi? Ratione?
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem delectus tempore deleniti, rerum exercitationem tenetur asperiores eos, dolorum, ipsa odit culpa ratione officia. Assumenda, adipisci dolores. Vel sit quas quos.
          </p>
          
          </div>
        </div>

       
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About