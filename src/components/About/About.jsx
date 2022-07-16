import { useEffect, useState } from 'react'
import {
//   faAngular,
  faCss3,
//   faGitAlt,
  faGithub,
  faHtml5,
  faJsSquare,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters/Animated'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './about.scss'
import { faDiagramNext } from '@fortawesome/free-solid-svg-icons'
import Me from "../../assets/images/me.jpg";
import meUT from "../../assets/images/meUT.jpg"
import meUT2 from "../../assets/images/meUT2.jpg"
import mepaint from "../../assets/images/mepainting.jpg"
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
      <div className="container about-page">
        <div className="bg"></div>
        <div className="featured">
        <div className="arrow" style={{left:10}} onClick={()=>handleArrow("l")}>&#171;</div>
        <div className="wrapper" style={{transform:`translateX(${-50*index}vw)`}}>
          {images.map((img, i) => (
      
              <img src={img} key={i} alt="" />
              
          ))}
          </div>
         
        <div className="arrow" style={{right:10}} onClick={()=>handleArrow("r")}>&#187;</div>
        </div>
        <div className="about-text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
     Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati totam est rem quis eius illo deserunt, quisquam odio ab, tempore dicta nam reprehenderit sequi ut vitae non temporibus nisi? Ratione?
          </p>
          <p align="LEFT">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem delectus tempore deleniti, rerum exercitationem tenetur asperiores eos, dolorum, ipsa odit culpa ratione officia. Assumenda, adipisci dolores. Vel sit quas quos.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos corrupti voluptates illo quia repudiandae doloribus ipsa rem dolorum esse. Voluptate iure modi accusamus quaerat nihil officia pariatur quasi, doloremque dicta?
          </p>
        </div>

       
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About